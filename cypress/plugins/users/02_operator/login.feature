Feature: Login to Application

  As a valid user
  i want to login to rhymes-staging

  Scenario: Login to rhymes-staging
    Given I open the rhymes-staging login page
    When I click on Login with email button
    And I submit login
    Then I should see dashboard page
