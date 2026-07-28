export default class ArticlePage {
  constructor(page) {
    this.page = page;
  }

  title(title) {
    return this.page.locator('h1.post_title.entry-title', {
      hasText: title,
    });
  }
}