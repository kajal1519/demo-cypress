////<reference type="Cypress">
import homePage from '../pageObjects/homePage';
import loginPage from '../pageObjects/loginPage';
import leftSideMenuOption from '../pageObjects/leftSideMenuOptions';
import electronicsPage from '../pageObjects/electronicsPage';
import cellPhonePage from '../pageObjects/cellPhonePage';
import shoppingCartPage from '../pageObjects/shoppingCartPage';
import billingAddress from '../pageObjects/billingAddressPage';

describe('1st test case', function()
{

before(function()
    {
        cy.fixture('exapmles').then(function(data)

    
    {
        this.data=data;
    })

    }
)


})

it('1st test case',function()
{  
const hp=new homePage();
const lp=new loginPage();
const lsm=new leftSideMenuOption();
const ep=new electronicsPage();
const cp=new cellPhonePage();
const sc=new shoppingCartPage();
const ba=new billingAddress();

    cy.visit('https://demowebshop.tricentis.com/');
    cy.visit('https://demowebshop.tricentis.com/login');
    lp.enterEmailId().type('kajalsharmamca@gmail.com');
    lp.enterPassword().type('Kajal@1234');
    lp.clickOnLoginButton().click();
    lsm.clickOnElectronicsOptions().click();
    ep.clickOnCellPhone().click();
    cp.clickOnAddToCartSmartPhone().click();
    hp.clickOnShoppingCart().click();
    sc.clickOnTermsAndCondition().check();
    sc.clcikOnCheckOut().click();
    ba.clickOnContinueButton().click();


 

    
   



})