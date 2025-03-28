import { test, expect } from '../fixtures/pageFixture';

const expectedCategories = require('../data/homeCategories.json');

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

test('Caso de uso 2: should verify that most common categories render at homepage', async ({ homePage }) => {
  await test.step('should navegate to homepage', async () => {
    await homePage.navigate();
  });

  const actual = await homePage.getCategories();
  // chequea que en len de las li y el expected array sean =
  expect(actual.length).toBe(expectedCategories.length);

  // itera buscando todas las categorias. (Se podria agregar que no existan repetidas tambien, no quise extender.)
  for (const item of expectedCategories) {
    expect(actual).toContain(item, `Haven't found expected item: ${item}`);
  }

});


