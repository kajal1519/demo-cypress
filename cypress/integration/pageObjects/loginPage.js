class loginPage{

    
     enterEmailId(){
        return cy.get('#Email');    
}

enterPassword(){
    return cy.get('#Password');
}

clickOnLoginButton(){
    return cy.get('form > .buttons > .button-1');
}




}
export default loginPage;
