import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('I am logged-in as a user', () => {
  cy.visit('https://rhymes-staging.ingedata.ai/users/sign_in')
  cy.get('#login-toggle')
    .click()
  cy.get('#user_email')
    .type('has.fetra@ingedata.ai')
  cy.get('#user_password')
    .type('1234567890')
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
  // cy.get('div').contains('Account Informations').should('be.visible');
});

When('I can edit user information', () => {
  cy.get('a.with-icon.upcase')
    .contains('Edit').click();
});

And('I can update user information', () => {
  cy.get('span.select2-selection__rendered')
    .eq(0)
    .click();
  // cy.contains('ABC IMMODIAG - COMMERCIAL').click();
  cy.get('.select2-results')
    .contains('ABC IMMODIAG - COMMERCIAL')
    .click();
  cy.get('input[type="password"]')
    .should('be.visible').eq(0)
    .type('1234567890');
});