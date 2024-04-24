class computerOptionPage
{
clickOnDesktop()
{
    return cy.get(':nth-child(1) > .sub-category-item > .picture > a > img');
}
clcikOnNotebook()
{
    return cy.get(':nth-child(2) > .sub-category-item > .picture > a > img');
}
clickOnAccessories()
{
    return cy.get(':nth-child(3) > .sub-category-item > .picture > a > img');
}

}

export default computerOptionPage;