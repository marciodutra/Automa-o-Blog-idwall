import { test, expect } from '@playwright/test';

import { ContactPage } from '../../pages/ContactPage';

import { contactData } from '../../test-data/contactData';


test.describe('Falar com um especialista', () => {


    test('deve enviar formulario de contato com sucesso', async ({ page }) => {


        const contactPage = new ContactPage(page);


        await page.goto('/');


        await contactPage.openContactForm();


        await contactPage.fillForm(contactData);


        await contactPage.submit();


        await contactPage.validateSuccess();


        await expect(
            contactPage.successMessage
        ).toHaveText('Interesse enviado com sucesso!');


    });


});