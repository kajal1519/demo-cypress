class billingAddress{

    clickOnContinueButton()
    {
        return cy.get('#billing-buttons-container > .button-1');
    }
}

export default billingAddress;