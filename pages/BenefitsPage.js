import { expect } from '@playwright/test';

export default class BenefitsPage {
  constructor(page) {
    this.page = page;

    this.categoryLink = page
      .getByRole('link', {
        name: 'Benefícios',
        exact: true,
      })
      .first();

    this.title = page.locator(
      'h1.elementor-heading-title'
    );
  }

  async openCategory() {
    await this.categoryLink.click();
  }

  async validateTitle(title) {
    await expect(this.title).toHaveText(title);
  }
}