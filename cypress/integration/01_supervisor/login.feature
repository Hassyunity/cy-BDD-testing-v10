Feature: Login to Application

  As a valid user
  i want to login to rhymes

  Scenario: Login to rhymes
    Given I open the rhymes login page
    When I click on Login with email button
    And I submit login
    Then I should see dashboard page
