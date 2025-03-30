import { test, expect } from '../fixtures/pageFixture';
import { randomIndex } from '../ultil/utils';

test('Caso de uso 1: should purchase product', async ({ homePage, searchPage, productPage, cartPage }) => {
  await test.step('should navigate to product', async () => {
    await homePage.navigate();
    await homePage.searchProduct('Heladera Samsung');
  });

  await test.step('should select a product from the result list', async () => {
    await searchPage.clickResult(1);
  });

  const productTitle = await test.step('should persist the product title and buy', async () => {
    const title = await productPage.getProductTitle();
    await productPage.buy();
    return title;
  });

  await test.step('should validate that cart page loads and check that the product has been added to the cart', async () => {
    await cartPage.waitForCartPage();
    await expect(cartPage.cart).toContainText(productTitle);
  });
});

test('should navigate correctly from a category', async ({ homePage, categoriePage }) => {
  await test.step('should navigate to homepage', async () => {
    await homePage.navigate();
  });

  const categories = await test.step('should return available categories', async () => {
    const list = await homePage.getCategories();
    expect(list.length).toBeGreaterThan(0);
    return list;
  });

  const index = randomIndex(0, 19);
  const categoryName = categories[index];

  await test.step(`should navegate to category`, async () => {
    await homePage.clickCategoryByIndex(index);
  });

  await test.step('should navigate to the selected category', async () => {
    await categoriePage.verifyCategorieNav(categoryName);
  });

});


