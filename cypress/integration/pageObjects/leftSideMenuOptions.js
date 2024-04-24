class leftSideMenuOption{

    clickOnBooksOption()
    {
        return cy.get('.block-category-navigation > .listbox > .list > :nth-child(1)');
    }

    clickOnComputersOption()
    {
        return cy.get('.list > :nth-child(2) > a');
    }

    clickOnElectronicsOptions()
    {
        return cy.get('.list > :nth-child(3) > a');
    }

    clickOnApparelAndShoesOption()
    {
        return cy.get('.list > :nth-child(4) > a');
    }
    clickOnDigitalDownloadOption()
    {
        return cy.get('.list > :nth-child(5) > a');
    }
    clickOnJeweleryOption()
    {
        return cy.get('.list > :nth-child(6) > a');

    }
    clickOnGiftCardsOption()
    {
        return cy.get('.list > :nth-child(7) > a');
    }
}

export default leftSideMenuOption;