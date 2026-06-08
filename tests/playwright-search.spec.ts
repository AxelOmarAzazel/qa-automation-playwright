import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';
import searchData from '../data/searchData.json';

test('Buscar locator en la documentación', async ({ page }) => {

    const homePage = new PlaywrightHomePage(page);

    for (const term of searchData.searchTerms) {
            await homePage.navigate();

            await homePage.openSearch();

            const searchBox = page.getByPlaceholder('Search docs');

            await expect(searchBox).toBeVisible();

            await searchBox.fill(term);

             await expect(page.getByRole('link').first()).toBeVisible();
};

});