import { test } from '@playwright/test';

test('Captura pantalla', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await page.screenshot({
        path: 'playwright-home.png'
    });

});