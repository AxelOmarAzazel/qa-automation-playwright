import { test, expect } from '@playwright/test';

test('Demo Trace Viewer', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

});