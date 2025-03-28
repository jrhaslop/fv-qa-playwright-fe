class ProductPage {

  constructor(page) {
    this.page = page;
    this.btnBuy = page.locator('[data-test-id="product-buy-button"]').nth(1);
    this.productTitle = page.locator('[data-test-id="product-info"] [data-test-id="product-title"]').nth(1);
  }

  async buy() {
    await this.btnBuy.click();
  }

  async getProductTitle() {
    return await this.productTitle.textContent();
  }


}

export default { ProductPage };
