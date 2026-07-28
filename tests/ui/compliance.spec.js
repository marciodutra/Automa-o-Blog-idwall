import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import CompliancePage from '../../pages/CompliancePage.js';

import { complianceData } from '../../test-data/complianceData.js';

test('deve acessar a categoria Compliance e Fraudes', async ({ page }) => {
  const homePage = new HomePage(page);
  const compliancePage = new CompliancePage(page);

  await homePage.open();

  await compliancePage.openCategory();

  await expect(page).toHaveURL(/compliance/);

  await compliancePage.validateTitle(
    complianceData.compliance.title
  );
});