import { test, expect } from '@playwright/test';

test('Buscar Playwright en Google', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.pause();

  await page.locator('textarea[name="q"]').fill('Playwright');

  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);

});