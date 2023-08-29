import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in as a supervisor', () => {
  cy.visit('http://localhost:3000')
  cy.get('#login-toggle')
    .click()
  cy.get('#user_email')
    .type('has.fetra@ingedata.ai')
  cy.get('#user_password')
    .type('has.fetra@ingedata.ai')
  cy.get('.login-button')
    .eq(1)
    .click()
  cy.get('#model-errors.callout.flash.info')
    .should('contain', 'Signed in successfully.')
});

When('I go to the manage user page', () => {
  cy.get('#main-sidebar-toggle')
    .click();
});