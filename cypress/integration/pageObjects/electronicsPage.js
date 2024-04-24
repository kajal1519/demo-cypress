class electronicsPage{

    clickOnCellPhone()
    {
       return cy.get(':nth-child(2) > .sub-category-item > .picture > a > img');

    }
    
    clcikOnCameraPhoto()
    {
        return cy.get(':nth-child(1) > .sub-category-item > .title > a');
    }
}

export default electronicsPage;