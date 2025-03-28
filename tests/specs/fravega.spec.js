import { test, expect } from '../fixtures/pageFixture';

test('Load Cookie GeoLoc', async ({ page, homePage }) => {
      await homePage.navigate();
      await page.waitForFunction(5000);
});


