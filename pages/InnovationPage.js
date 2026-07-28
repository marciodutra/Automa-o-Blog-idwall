import { expect } from '@playwright/test';

export default class InnovationPage {
  constructor(page) {
    this.page = page;

    this.categoryLink = page
      .getByRole('link', {
        name: 'Tecnologia e Inovação',
        exact: true,
      })
      .first();

    this.title = page.locator(
      'h1.elementor-heading-title'
    );

    this.nextPageButton = page.locator(
      'a.page-numbers.next'
    );

    this.currentPage = page.locator(
      'span.page-numbers.current'
    );
  }

  async openCategory() {
    await this.categoryLink.click();
  }

  async validateTitle(title) {
    await expect(this.title).toHaveText(title);
  }

  async scrollToBottom() {
    let previousHeight = 0;

    while (true) {
      const currentHeight = await this.page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
        return document.body.scrollHeight;
      });

      if (currentHeight === previousHeight) {
        break;
      }

      previousHeight = currentHeight;
    }

    await this.nextPageButton.scrollIntoViewIfNeeded();
  }

  async goToNextPage() {
    await expect(this.nextPageButton).toBeVisible();

    await this.nextPageButton.click();
  }

  async validateCurrentPage(pageNumber) {
    await expect(this.currentPage).toContainText(pageNumber);
  }
}