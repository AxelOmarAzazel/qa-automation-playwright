import { test, expect } from '../fixtures/homePageFixture';
import searchData from '../data/searchData.json';

for (const term of searchData.searchTerms) {
    test(`Buscar ${term}`, async ({ homePage}) => {

            await homePage.navigate();

            await homePage.openSearch();

            await homePage.search(term);

            await homePage.validateResults();
        

    });
};
