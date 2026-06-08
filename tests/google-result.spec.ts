import { test, expect } from '@playwright/test';

test('Validar resultados de Playwright', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.locator('textarea[name="q"]').fill('Playwright');

  await page.keyboard.press('Enter');

  await expect(
    page.locator('h3').first()
  ).toBeVisible();

});