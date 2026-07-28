export default class SearchResultPage {
  constructor(page) {
    this.page = page;
  }

  article(title) {
    return this.page.getByText(title);
  }

  async openArticle(title) {
    await this.article(title).click();
  }
}