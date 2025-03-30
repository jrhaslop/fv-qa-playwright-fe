class SearchPage {

  constructor(page) {
    this.page = page;
    this.resultItems = page.locator('ul[data-test-id="results-list"] [data-test-id="result-item"]');
  }

  async clickResult(index = 0) {
    await this.resultItems.nth(index).click();
  }

}

export default { SearchPage };
