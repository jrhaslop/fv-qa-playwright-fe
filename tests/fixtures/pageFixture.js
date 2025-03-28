const base = require('@playwright/test').test;
const { HomePage } = require('../pages/HomePage').default;
const { CartPage } = require('../pages/CartPage').default;
const { SearchPage } = require('../pages/SearchPage').default;
const { ProductPage } = require('../pages/ProductPage').default;

const dotenv = require('dotenv');
const fs = require('fs');

const ENV = process.env.ENV || 'dev';
const envFile = `.env.${ENV}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
}

const BASE_URL = process.env.BASE_URL || 'https://www.fravega.com/';
const COOKIE_DOMAIN = new URL(BASE_URL).hostname;

const GEO_COOKIE = {
  name: 'geoPostalCode',
  value: 'W3siX190eXBlbmFtZSI6IlNob3BwaW5nUG9zdGFsQ29kZSIsImlkIjoiQzE0MjgiLCJudW1iZXIiOiIxNDI4IiwibG9jYXRpb24iOnsiX190eXBlbmFtZSI6IkxvY2F0aW9uIiwiaWQiOjIsIm5hbWUiOiJDYXBpdGFsIEZlZGVyYWwifSwicmVnaW9uIjoiQ2FwaXRhbCBGZWRlcmFsIn1d',
  domain: COOKIE_DOMAIN,
  path: '/',
  httpOnly: false,
  secure: true,
  sameSite: 'Lax',
  expires: Math.floor(new Date('2026-05-01').getTime() / 1000)
};

const test = base.extend({
  page: async ({ browser }, use) => {
    const context = await browser.newContext();
    await context.addCookies([GEO_COOKIE]);

    const page = await context.newPage();
    await use(page);

    await context.close();
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

module.exports = { test, expect: base.expect };
