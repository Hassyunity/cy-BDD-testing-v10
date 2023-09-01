import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the rhymes login page', () => {
  cy.visit('http://localhost:3000')
});

When('I click on Login with email button', () => {
  cy.get('#login-toggle').click()
});

And('I submit login', () => {
  cy.get('#user_email').type('supervisor@ingedata.ai')
  cy.get('#user_password').type('ingedata.test')
  cy.get('.login-button').eq(1).click()
});

Then('I should see dashboard page', () => {
  cy.get('#model-errors.callout.flash.info').should('contain', 'Signed in successfully.')
});

// account / user data
Given('I am on the account information page', () => {
  cy.login("supervisor");

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
  cy.edit_user_information();
});

Then('I can see the login page', () => {
  cy.get('div.alert.callout.flash').contains('You need to sign in before continuing.')
});

// Manage users
Given('I go to the manage users page', () => {
  cy.login("supervisor");
  cy.get('#main-sidebar-toggle')
    .click();
  
  cy.get('a.main-sidebar-menu-toggle').contains('Manage').click();
  cy.get('a').contains('Users').click();
  cy.wait(5000)
});

When('I can edit on user', () => {
  cy.contains('a', 'Operator Test User').click();

  cy.contains('a', 'Edit').click();

  cy.edit_user_information();
});

Then('I can see the user information updated', () => {
  cy.contains('div', 'Account informations').should('be.visible');
});
