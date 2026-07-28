import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import OthersPage from '../../pages/OthersPage.js';

import { othersData } from '../../test-data/othersData.js';

test('deve acessar a categoria Outros', async ({ page }) => {
  const homePage = new HomePage(page);
  const othersPage = new OthersPage(page);

  await homePage.open();

  await othersPage.openCategory();

  await expect(page).toHaveURL(/outros/);

  await othersPage.validateTitle(
    othersData.others.title
  );
});