import { test, expect } from '../fixtures/homePageFixture';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';
import searchData from '../data/searchData.json';

for (const term of searchData.searchTerms) {
    test(`Buscar ${term}`, async ({ homePage, page }) => {

            await homePage.navigate();

            await homePage.openSearch();

            const searchBox = page.getByPlaceholder('Search docs');

            await expect(searchBox).toBeVisible();

            await searchBox.fill(term);

            await expect(page.getByRole('link').first()).toBeVisible();
        

    });
};
