import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import InnovationPage from '../../pages/InnovationPage.js';

import { categoryData } from '../../test-data/categoryData.js';

test('deve navegar pela categoria Inovação até a página 2', async ({ page }) => {
  const homePage = new HomePage(page);
  const innovationPage = new InnovationPage(page);

  await homePage.open();

  // Categoria
  await innovationPage.openCategory();

  await expect(page).toHaveURL(
    categoryData.innovation.url
  );

  await innovationPage.validateTitle(
    categoryData.innovation.title
  );

  // Scroll até o final
  await innovationPage.scrollToBottom();

  // Próxima página
  await innovationPage.goToNextPage();

  await page.waitForURL(
    `**${categoryData.innovation.page2}`
  );

  // Continua na categoria
  await innovationPage.validateTitle(
    categoryData.innovation.title
  );

  // Scroll novamente
  await innovationPage.scrollToBottom();

  // Página atual
  await innovationPage.validateCurrentPage(
    categoryData.innovation.currentPage
  );
});