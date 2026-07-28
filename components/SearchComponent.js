export default class SearchComponent {
  constructor(page) {
    this.page = page;

    this.searchButton = page.locator('button.search_submit').first();
    this.searchInput = page
      .getByPlaceholder('Type here and hit enter')
      .first();
  }

  async openSearch() {
    await this.searchButton.click();
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.page.keyboard.press('Enter');
  }
}