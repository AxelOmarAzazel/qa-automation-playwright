import { Page } from '@playwright/test';

export class PlaywrightHomePage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async openSearch() {
        await this.page.getByRole('button', { name: 'Search' }).click();
    }

    async search(text: string) {
        await this.page.getByPlaceholder('Search docs').fill(text);
    }

    async clickLocatorsResult() {
        await this.page.getByRole('link', { name: /Locators/ }).first().click();
    }
}