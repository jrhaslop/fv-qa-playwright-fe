import { expect } from "@playwright/test";

class CartPage {
  
  constructor(page) {
    this.page = page;
    this.cart = this.page.locator('body');
  }

  async waitForCartPage() {
    await expect(this.page).toHaveURL(/.*\/chk-ui.*/, { timeout: 10000 });
    await expect(this.page.locator('text=finalizar compra')).toBeVisible();
  }

}

export default { CartPage };
