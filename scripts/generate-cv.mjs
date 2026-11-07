import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";

const source = new URL(
  "../src/assets/pdf/CV_Reno_Andrian.html",
  import.meta.url,
);
const output = new URL(
  "../src/assets/pdf/CV_Reno_Andrian.pdf",
  import.meta.url,
);
const browser = await chromium.launch();

try {
  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 },
  });
  await page.goto(source.href);
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);
  const height = await page
    .locator(".resume")
    .evaluate((element) => element.getBoundingClientRect().height);
  // A4 has 269mm of content height after the template's 14mm page margins.
  if (height > (269 * 96) / 25.4) {
    throw new Error(
      "Isi CV melebihi satu halaman A4. Rapikan template sebelum membuat PDF.",
    );
  }
  await page.pdf({
    path: fileURLToPath(output),
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
    outline: true,
  });
  console.log(
    "CV satu halaman berhasil dibuat: src/assets/pdf/CV_Reno_Andrian.pdf",
  );
} finally {
  await browser.close();
}
