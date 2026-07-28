import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import InnovationPage from '../../pages/InnovationPage.js';

import { categoryData } from '../../test-data/categoryData.js';

import { step } from '../../helpers/stepHelper.js';

test('deve navegar pela categoria Inovação até a página 2', async ({ page }) => {
  const homePage = new HomePage(page);
  const innovationPage = new InnovationPage(page);

  await step('Abrir Home', async () => {
    await homePage.open();
});  
  await innovationPage.openCategory();

  await expect(page).toHaveURL(
    categoryData.innovation.url
  );

  await innovationPage.validateTitle(
    categoryData.innovation.title
  );

  
  await innovationPage.scrollToBottom();

  
  await innovationPage.goToNextPage();

  await page.waitForURL(
    `**${categoryData.innovation.page2}`
  );

  
  await innovationPage.validateTitle(
    categoryData.innovation.title
  );

  
  await innovationPage.scrollToBottom();

  
  await innovationPage.validateCurrentPage(
    categoryData.innovation.currentPage
  );
});