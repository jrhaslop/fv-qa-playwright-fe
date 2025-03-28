class HomePage {
  
  constructor(page) {
    this.page = page;
    this.categories = this.page.locator('ul li [data-testid="home-categorias-destacadas-element"] span', { timeout: 10000 });
    this.searchBar = this.page.locator('input[placeholder="Buscar productos"]');
    this.btnSearch = this.page.locator('form:has([placeholder*="Buscar"]) button[type="submit"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async getCategories() {
    return await this.categories.allTextContents();
  }

  async searchProduct(keyword) {
    await this.searchBar.fill('');
    await this.searchBar.fill(keyword);
    await this.btnSearch.click();
  }

}

export default { HomePage };

