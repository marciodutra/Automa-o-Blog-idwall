import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';

test('deve pesquisar um artigo no blog', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.search.openSearch();

  await homePage.search.search('segurança');

  const articleTitle = page.getByText(
    'Conheça o Device Integrity, nova atualização de segurança do SDK Capture Suite Mobile'
  );

  await expect(articleTitle).toBeVisible();
});