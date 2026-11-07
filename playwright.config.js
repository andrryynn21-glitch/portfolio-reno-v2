import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  // Test credentials and mocked requests ensure tests never send real email.
  webServer: [
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4173 --strictPort",
      url: "http://127.0.0.1:4173",
      env: {
        VITE_EMAILJS_SERVICE_ID: "test_service",
        VITE_EMAILJS_TEMPLATE_ID: "test_template",
        VITE_EMAILJS_PUBLIC_KEY: "test_key",
      },
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4174 --strictPort",
      url: "http://127.0.0.1:4174",
      env: {
        VITE_EMAILJS_SERVICE_ID: "",
        VITE_EMAILJS_TEMPLATE_ID: "",
        VITE_EMAILJS_PUBLIC_KEY: "",
      },
    },
  ],
});
