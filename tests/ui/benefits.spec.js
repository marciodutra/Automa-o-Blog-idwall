import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import BenefitsPage from '../../pages/BenefitsPage.js';

import { benefitsData } from '../../test-data/benefitsData.js';

test('deve acessar a categoria Benefícios', async ({ page }) => {
  const homePage = new HomePage(page);
  const benefitsPage = new BenefitsPage(page);

  await homePage.open();

  await benefitsPage.openCategory();

  await expect(page).toHaveURL(/beneficios/);

  await benefitsPage.validateTitle(
    benefitsData.benefits.title
  );
});