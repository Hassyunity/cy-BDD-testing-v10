import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in as a supervisor', () => {
  cy.login("supervisor");
});

When('I go to the manage users page', () => {
  cy.get('#main-sidebar-toggle')
    .click();
  
  cy.get('a.main-sidebar-menu-toggle').contains('Manage').click();
  cy.get('a').contains('Users').click();
});