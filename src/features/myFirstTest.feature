Feature: Running Cucumber with wdio
    As a user of wdio
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: wdio and Cucumber Test
        Given I go to "https://google.com/"
        When I check the title
        Then I should see the title

