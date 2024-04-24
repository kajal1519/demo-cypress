class cellPhonePage{

    clickOnAddToCartSmartPhone()
    {

        return cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2');
    }



}

export default cellPhonePage;