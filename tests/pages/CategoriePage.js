import normalizedCategories from '../constants/normalizedCategories.js';
import { expect } from '@playwright/test';
import { normalizeCategory } from '../ultil/utils.js'

class CategoriePage {
  
  constructor(page) {
    this.page = page;
    this.categoryTitle = this.page.locator('h1, h2, .category-title, [class*="searchTitle"] span').nth(0);
  }

  async verifyCategorieNav(categoryName) {
    const normalized = normalizeCategory(normalizedCategories, categoryName);
    await expect(this.categoryTitle).toHaveText(normalized, { timeout: 8000 });
  }

}

export default { CategoriePage };
