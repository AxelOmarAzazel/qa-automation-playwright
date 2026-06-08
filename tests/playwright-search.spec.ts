import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';

test('Buscar locator en la documentación', async ({ page }) => {

    const homePage = new PlaywrightHomePage(page);

    await homePage.navigate();

    await homePage.openSearch();

    await homePage.search('locator');

    await homePage.clickLocatorsResult();

    await expect(page).toHaveURL(/.*docs\/locators/);

});