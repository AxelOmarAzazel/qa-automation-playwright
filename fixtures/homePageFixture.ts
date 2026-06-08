import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';

type MyFixtures = {
    homePage: PlaywrightHomePage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {

        const homePage = new PlaywrightHomePage(page);

        await use(homePage);
    }
});

export { expect } from '@playwright/test';