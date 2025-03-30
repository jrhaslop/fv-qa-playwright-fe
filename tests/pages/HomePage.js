import { expect } from '@playwright/test';

class HomePage {
  
  constructor(page) {
    this.page = page;
    this.categoryElements = this.page.locator('ul li [data-testid="home-categorias-destacadas-element"] span', { timeout: 10000 });
    this.searchBar = this.page.locator('input[placeholder="Buscar productos"]');
    this.btnSearch = this.page.locator('form:has([placeholder*="Buscar"]) button[type="submit"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async getCategories() {
    return await this.categoryElements.allTextContents();
  }

  async searchProduct(keyword) {
    await this.searchBar.fill('');
    await this.searchBar.fill(keyword);
    await this.btnSearch.click();
  }

  async clickCategoryByIndex(index) {
    const count = await this.categoryElements.count();
    expect(index).toBeGreaterThanOrEqual(0);
    expect(count).toBe(20);

    await this.categoryElements.nth(index).click();
  }

  async clickCategoryByName(name) {
    const category = this.categoryElements.filter({ hasText: name }).first();
    await expect(category).toBeVisible({ timeout: 5000 });

    await category.click();
  }

}

export default { HomePage };

