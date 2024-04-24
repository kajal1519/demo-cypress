class shoppingCartPage
{

    
clickOnTermsAndCondition()
{
    return cy.get('#termsofservice');

}
clcikOnCheckOut()
{
    return cy.get('#checkout');
}


}
export default shoppingCartPage;