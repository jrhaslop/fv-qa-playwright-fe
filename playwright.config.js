const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');
const fs = require('fs');

const ENV = process.env.ENV || 'prod';

const envFile = `.env.${ENV}`;
if (fs.existsSync(envFile)) dotenv.config({ path: envFile });

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://www.fravega.com/',
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  },
});

