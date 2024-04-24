Feature: End to end add to cart validation

    application Regression

    Scenario: Add to cart products 
    Given I open DemoWebShop page
    When I login to the portal
    And  I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thank you or Successful message