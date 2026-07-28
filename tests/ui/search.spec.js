import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';

test('deve pesquisar um artigo no blog', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.search.openSearch();

  await homePage.search.search('segurança');

  await expect(page).toHaveURL(/s=/);

});