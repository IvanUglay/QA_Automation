
import { chromium } from '@playwright/test';

export default async () => {
  const browser = await chromium.launch();
  await browser.close();
};
