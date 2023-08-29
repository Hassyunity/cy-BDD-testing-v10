import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('I am logged-in as a user', () => {
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

And('I am on the account information page', () => {
  cy.get('#main-sidebar-toggle')
    .click();
  cy.get('.main-sidbar-menu-name')
    .click();
  cy.get('span')
    .contains('User Data')
    .click();
});

When('I can edit user information', () => {
  cy.get('a.with-icon.upcase')
    .contains('Edit').click();
});

And('I can update user information', () => {
  cy.get('.select2-selection__rendered')
    .eq(0)
    .click();
  
  cy.get('.select2-selection__arrow')
    .eq(0)
    .click();
  cy.get('.select2-results')
    .contains('ABC IMMODIAG - COMMERCIAL')
    .click();
  cy.get('input[type="password"]')
    .should('be.visible').eq(0)
    .type('has.fetra@ingedata.ai');
  cy.get('input[type="password"]')
    .should('be.visible').eq(1)
    .type('has.fetra@ingedata.ai');
  cy.get('span.select2-selection__rendered')
    .eq(1)
    .click();
  cy.get('.select2-results')
    .contains('English')
    .click();

  cy.get('a').contains('Update').click();

  cy.visit('http://localhost:3000')
    // .should('be.visible');
});
