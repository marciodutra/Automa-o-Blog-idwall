import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';

test('deve abrir a página inicial do blog', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveURL(/blog\.idwall\.co/);

  await expect(page).toHaveTitle(/idwall/i);
});