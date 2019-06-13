Feature: Buy a t-shirt
    As a user of an e-commerce website
    I should be able to purchase a t-shirt

    Scenario: wdio and Cucumber Test
        Given I go to "http://automationpractice.com/"
        When I click the t-shirt menu 
        Then I should see the catalog
