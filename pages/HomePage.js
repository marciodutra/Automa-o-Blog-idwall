import SearchComponent from '../components/SearchComponent.js';

export default class HomePage {
  constructor(page) {
    this.page = page;

    this.search = new SearchComponent(page);
  }

  async open() {
    await this.page.goto('/');
  }
}