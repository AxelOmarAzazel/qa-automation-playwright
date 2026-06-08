import { expect,Page } from '@playwright/test';

export class PlaywrightHomePage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async openSearch() {
        await this.page.getByRole('button', { name: 'Search' }).click();
    }

    async search(term: string) {
        const searchBox = this.page.getByPlaceholder('Search docs');
        await expect(searchBox).toBeVisible();
        await searchBox.fill(term);
    }

    async clickLocatorsResult() {
        await this.page.getByRole('link', { name: /Locators/ }).first().click();
    }
    
    async validateResults() {

    await expect(
        this.page.getByRole('link').first()
    ).toBeVisible();

    }
}