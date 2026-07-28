import { test, expect } from '@playwright/test';

import HomePage from '../../pages/HomePage.js';
import SearchResultPage from '../../pages/SearchResultPage.js';
import ArticlePage from '../../pages/ArticlePage.js';

import { searchData } from '../../test-data/searchData.js';

import { step } from '../../helpers/stepHelper.js';


test('deve pesquisar e abrir um artigo no blog', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultPage = new SearchResultPage(page);
  const articlePage = new ArticlePage(page);

  await step('Abrir Home', async () => {
    await homePage.open();
});

  await homePage.search.openSearch();

  await homePage.search.search(
    searchData.securityArticle.term
  );

  await searchResultPage.openArticle(
    searchData.securityArticle.expectedTitle
  );

  await expect(
    articlePage.title(
      searchData.securityArticle.expectedTitle
    )
  ).toBeVisible();
});