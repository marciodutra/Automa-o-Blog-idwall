import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import OnboardingPage from '../../pages/OnboardingPage.js';

import { onboardingData } from '../../test-data/onboardingData.js';

import { step } from '../../helpers/stepHelper.js';

test('deve acessar a categoria Onboarding e Identidade', async ({ page }) => {
  const homePage = new HomePage(page);
  const onboardingPage = new OnboardingPage(page);

  await step('Abrir Home', async () => {
    await homePage.open();
});

  await onboardingPage.openCategory();

  await expect(page).toHaveURL(/onboarding/);

  await onboardingPage.validateTitle(
    onboardingData.onboarding.title
  );
});