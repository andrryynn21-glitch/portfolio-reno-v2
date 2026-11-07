import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  await page.route("https://api.emailjs.com/**", (route) => route.abort());
});

test("loads real content, valid images, contact and project links", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Ide jadi nyata.",
  );
  await expect(page.locator(".project-card")).toHaveCount(11);
  await expect(page.locator("body")).not.toContainText("Frontend Developer");
  await expect(
    page.locator('a[href="mailto:andrryynn21@gmail.com"]'),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Unduh CV" })).toHaveAttribute(
    "download",
    "CV_Reno_Andrian.pdf",
  );
  await expect(
    page.getByRole("link", { name: "Lihat website: Yammatcha" }),
  ).toHaveAttribute("href", /yammatcha-website/);
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element) => element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  for (const link of await page.locator('a[href^="#"]').all()) {
    const href = await link.getAttribute("href");
    await expect(page.locator(href)).toHaveCount(1);
  }
  const cv = await page
    .getByRole("link", { name: "Unduh CV" })
    .getAttribute("href");
  expect((await page.request.get(cv)).ok()).toBe(true);
  expect(errors).toEqual([]);
});

test("downloads the updated tagged CV with the expected filename", async ({
  page,
}) => {
  await page.goto("/#about");
  const link = page.getByRole("link", { name: "Unduh CV", exact: true });
  const response = await page.request.get(await link.getAttribute("href"));
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  const pdf = (await response.body()).toString("latin1");
  expect(pdf.startsWith("%PDF-")).toBe(true);
  expect(pdf).toContain("/StructTreeRoot");
  const downloadPromise = page.waitForEvent("download");
  await link.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("CV_Reno_Andrian.pdf");
  expect(await download.failure()).toBeNull();
});

test("filters projects and opens honest case-study details", async ({
  page,
}) => {
  await page.goto("/#projects");
  await page.getByRole("button", { name: "Aplikasi 5", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(5);
  await expect(page.locator(".project-kasir")).toContainText("Kasir UMKM");
  await page.locator(".project-kasir summary").click();
  await expect(
    page.getByText("Pencatatan transaksi", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Demo publik belum tersedia", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".project-duofund")).toBeVisible();
  await expect(page.locator(".project-undangan-digital")).toBeVisible();
  await expect(page.locator(".project-ruang-dengar")).toBeVisible();
  await expect(page.locator(".project-aryanotes")).toBeVisible();
  await page.getByRole("button", { name: "Website 6", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(6);
  await expect(page.locator(".project-duofund")).toHaveCount(0);
  await expect(page.locator(".project-webcraft")).toBeVisible();
  await expect(page.locator(".project-kala-jumpa")).toBeVisible();
  await expect(page.locator(".project-tiba-tiba-warkop")).toBeVisible();
  await page.locator(".project-invitation summary").click();
  await expect(page.getByText("Target: RSVP", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Semua 11", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(11);
});

test("seven added projects have original captures and correct public destinations", async ({
  page,
}) => {
  const additions = [
    ["webcraft", "WebCraft", "https://webcraft-landing-nine.vercel.app/"],
    ["kala-jumpa", "Kedai Kala Jumpa", "https://kala-jumpa.vercel.app/"],
    [
      "tiba-tiba-warkop",
      "Tiba-Tiba Warkop",
      "https://tiba-tiba-warkop.vercel.app/",
    ],
    ["duofund", "DuoFund", "https://duofund-app.vercel.app/"],
    [
      "undangan-digital",
      "Undangan Digital",
      "https://undangan-digital-two-gules.vercel.app/",
    ],
    [
      "ruang-dengar",
      "Ruang Dengar",
      "https://ruang-dengar.infinityfreeapp.com/?i=1",
    ],
    ["aryanotes", "AryaNotes", "https://aryanotes-andrryynn21.netlify.app/"],
  ];
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#projects");
  await expect(page.locator(".project-capture")).toHaveCount(7);
  await expect(page.locator(".project-number")).toHaveText(
    Array.from({ length: 11 }, (_, index) =>
      String(index + 1).padStart(2, "0"),
    ),
  );
  for (const [id, title, url] of additions) {
    const card = page.locator(`.project-${id}`);
    await expect(
      card.getByRole("heading", { name: title, exact: true }),
    ).toBeVisible();
    await expect(card.locator(".project-status")).toHaveText("Tayang publik");
    await expect(card.locator("time")).toHaveAttribute(
      "datetime",
      "2026-11-07",
    );
    await expect(card.locator(".project-link-row a")).toHaveAttribute(
      "href",
      url,
    );
    const image = card.locator("img");
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate((element) => [
          element.naturalWidth,
          element.naturalHeight,
        ]),
      )
      .toEqual([1440, 900]);
    const source = await image.getAttribute("src");
    await expect(
      card.getByRole("link", {
        name: `Buka tangkapan layar ${title}`,
        exact: true,
      }),
    ).toHaveAttribute("href", source);
    const response = await page.request.get(source);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/jpeg");
  }
  const popupPromise = page.waitForEvent("popup");
  await page
    .getByRole("link", { name: "Buka tangkapan layar WebCraft", exact: true })
    .click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  await expect(popup.locator("img")).toBeVisible();
  await popup.close();
  await page.locator(".project-duofund summary").click();
  await expect(page.locator(".project-duofund .project-note")).toContainText(
    "hanya mencatat aktivitas",
  );
  await page.locator(".project-undangan-digital summary").click();
  await expect(
    page.locator(".project-undangan-digital .project-note"),
  ).toContainText("contoh undangan paket belum dibuat");
});

test("navigation, theme persistence, and reduced motion work", async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  if (isMobile) {
    const toggle = page.locator(".menu-toggle");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
    await toggle.click();
  }
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Tentang", exact: true })
    .click();
  await expect(page).toHaveURL(/#about$/);
  await expect(page.locator('.nav-menu a[href="#about"]')).toHaveAttribute(
    "aria-current",
    "location",
  );
  if (isMobile)
    await expect(page.locator("#navigation-menu")).not.toBeVisible();
  await page.getByRole("button", { name: "Aktifkan tema gelap" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Aktifkan tema terang" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(
    await page
      .locator("html")
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe("auto");
  await page
    .getByRole("link", { name: "Reno Andrian, beranda", exact: true })
    .click();
  await expect(page.locator(".nav-menu a[aria-current]")).toHaveCount(0);
});

test("no horizontal overflow across narrow and wide layouts", async ({
  page,
}) => {
  for (const width of [320, 375, 640, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 950 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
  }
});

test("accessible landmarks, controls, and contrast in both themes", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator(".project-yammatcha summary").click();
  for (const theme of ["light", "dark"]) {
    if (theme === "dark")
      await page.getByRole("button", { name: "Aktifkan tema gelap" }).click();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
});

async function fillContact(page) {
  await page.getByLabel("Nama Anda").fill("Portfolio Test");
  await page
    .getByLabel("Alamat email", { exact: true })
    .fill("test@example.com");
  await page
    .getByLabel("Apa yang ingin Anda diskusikan?")
    .fill("Saya ingin mendiskusikan sebuah proyek website.");
}

test("contact success sends the populated fields and clears only after success", async ({
  page,
}) => {
  let payload = "";
  await page.route("https://api.emailjs.com/**", async (route) => {
    payload = route.request().postData() || "";
    await route.fulfill({ status: 200, contentType: "text/plain", body: "OK" });
  });
  await page.goto("/#contact");
  await fillContact(page);
  await page.getByRole("button", { name: "Kirim pesan", exact: true }).click();
  await expect(page.locator(".form-status")).toContainText(
    "Pesan berhasil dikirim",
  );
  expect(payload).toContain("Portfolio Test");
  expect(payload).toContain("test@example.com");
  expect(payload).toContain("Saya ingin mendiskusikan sebuah proyek website.");
  await expect(page.getByLabel("Nama Anda")).toHaveValue("");
});

test("contact failure retains the message and allows retry", async ({
  page,
}) => {
  await page.route("https://api.emailjs.com/**", (route) =>
    route.fulfill({ status: 503, body: "Service unavailable" }),
  );
  await page.goto("/#contact");
  await fillContact(page);
  await page.getByRole("button", { name: "Kirim pesan", exact: true }).click();
  await expect(page.locator(".form-status")).toContainText(
    "Pesan belum terkirim",
  );
  await expect(page.getByLabel("Nama Anda")).toHaveValue("Portfolio Test");
  await expect(
    page.getByRole("button", { name: "Kirim pesan", exact: true }),
  ).toBeEnabled();
  await page.route("https://api.emailjs.com/**", (route) =>
    route.fulfill({ status: 200, body: "OK" }),
  );
  await page.getByRole("button", { name: "Kirim pesan", exact: true }).click();
  await expect(page.locator(".form-status")).toContainText(
    "Pesan berhasil dikirim",
  );
});

test("contact validates required fields and provides an honest unconfigured fallback", async ({
  page,
}) => {
  await page.goto("http://127.0.0.1:4174/#contact");
  const button = page.getByRole("button", { name: "Buka aplikasi email" });
  await expect(button).toBeVisible();
  await button.click();
  expect(
    await page.locator("form").evaluate((form) => form.checkValidity()),
  ).toBe(false);
  await fillContact(page);
  await button.click();
  await expect(page.locator(".form-status")).toContainText("belum dikirim");
  await expect(page.getByLabel("Nama Anda")).toHaveValue("Portfolio Test");
});

test("blocked storage and clipboard do not break the page", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage blocked");
      },
    });
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => Promise.reject(new Error("Clipboard blocked")),
      },
    });
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Aktifkan tema gelap" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Salin alamat email" }).click();
  await expect(page.locator(".copy-status")).toContainText(
    "andrryynn21@gmail.com",
  );
});
