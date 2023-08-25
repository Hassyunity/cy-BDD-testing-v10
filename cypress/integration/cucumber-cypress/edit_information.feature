Feature: I can edit user information

Scenario: I can edit user information
  Given I am logged-in as a user
  And I am on the account information page
  When I can edit user information
  # And I can updata user information
  # Then I can see the user information updated