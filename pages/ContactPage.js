export class ContactPage {
    constructor(page) {

        this.page = page;

        this.specialistButton = page
            .getByRole('link', { name: 'Fale com um especialista!' })
            .first();

        this.acceptCookiesButton = page.getByRole('button', {
            name: 'Aceitar'
        });


        this.formDescription = page.locator(
            'p.styles-module-scss-module__HzlDhG__description',
            {
                hasText: 'Preencha os campos abaixo'
            }
        );


        this.contactForm = this.formDescription.locator(
            'xpath=ancestor::form'
        );


        this.firstNameInput = this.contactForm.locator(
            'input[name="first_name"]'
        );

        this.lastNameInput = this.contactForm.locator(
            'input[name="last_name"]'
        );

        this.phoneInput = this.contactForm.locator(
            'input[name="mobile"]'
        );

        this.emailInput = this.contactForm.locator(
            'input[name="email"]'
        );

        this.companyInput = this.contactForm.locator(
            'input[name="company"]'
        );


        this.cargoSelect = this.contactForm.locator('#cargo');

        this.funcionariosSelect = this.contactForm.locator('#funcionarios');

        this.segmentoSelect = this.contactForm.locator('#segmento');

        this.canalSelect = this.contactForm.locator('#canal');

        this.verificacaoSelect = this.contactForm.locator('#verificacao');

        this.referenciaSelect = this.contactForm.locator('#referencia');


        this.submitButton = page.getByRole('button', {
            name: 'Falar com especialista'
        });


        this.successMessage = page.getByText(
            'Interesse enviado com sucesso!'
        );
    }


    async openContactForm() {

        await this.specialistButton.click();

        await this.page.waitForLoadState('networkidle');


        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
        }


        await this.formDescription.scrollIntoViewIfNeeded();

        await this.formDescription.waitFor({
            state: 'visible'
        });
    }


    async fillForm(data) {

    await this.firstNameInput.fill(data.firstName);

    await this.lastNameInput.fill(data.lastName);


    await this.phoneInput.click();

    await this.phoneInput.press('Control+A');

    await this.phoneInput.type(data.phone, {
        delay: 150
    });


    await this.emailInput.fill(data.email);

    await this.companyInput.fill(data.company);


    await this.cargoSelect.click();

    await this.cargoSelect.selectOption({
        label: data.cargo
    });

    await this.cargoSelect.dispatchEvent('change');

    await this.cargoSelect.blur();



    await this.funcionariosSelect.click();

    await this.funcionariosSelect.selectOption({
        label: data.funcionarios
    });

    await this.funcionariosSelect.dispatchEvent('change');

    await this.funcionariosSelect.blur();



    await this.segmentoSelect.click();

    await this.segmentoSelect.selectOption({
        label: data.segmento
    });

    await this.segmentoSelect.dispatchEvent('change');

    await this.segmentoSelect.blur();



    await this.canalSelect.click();

    await this.canalSelect.selectOption({
        label: data.canal
    });

    await this.canalSelect.dispatchEvent('change');

    await this.canalSelect.blur();



    await this.verificacaoSelect.click();

    await this.verificacaoSelect.selectOption({
        label: data.verificacao
    });

    await this.verificacaoSelect.dispatchEvent('change');

    await this.verificacaoSelect.blur();



    await this.referenciaSelect.click();

    await this.referenciaSelect.selectOption({
        label: data.referencia
    });

    await this.referenciaSelect.dispatchEvent('change');

    await this.referenciaSelect.blur();

}


    async submit() {

        await this.submitButton.scrollIntoViewIfNeeded();

        await this.submitButton.click();

    }


    async validateSuccess() {

        await this.successMessage.waitFor({
            state: 'visible',
            timeout: 10000
        });

    }
}