Feature: Edit user data

As a supervisor, I want to be able to do these things

  Scenario: login
    Given I open the rhymes login page
    When I click on Login with email button
    And I submit login
    Then I should see dashboard page

  Scenario: I can edit user information
    Given I am on the account information page
    When I can edit user information
    And I can update user information
    Then I can see the login page

  Scenario: I can manage user data
    Given I go to the manage users page
    When I can edit on user
    Then I can see the user information updated
