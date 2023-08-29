Feature: Edit user data

As a user I want to be able to edit my data

  Scenario: Edit user data
    Given I am logged in as a supervisor
    When I go to the manage users page
    And I click on user "user1"
    And I click on "Edit"
    Then I can update the user data