class homePage
{

    

    clickOnElectronics()
    {
        return cy.get('.top-menu > :nth-child(3)> [href="/electronics"]');
    }
    clickOnShoppingCart()
    {

        return cy.get('#topcartlink > .ico-cart');
    }

    

}
export default homePage;
