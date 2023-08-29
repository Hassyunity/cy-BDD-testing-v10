import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the rhymes-staging login page', () => {
  cy.visit('http://localhost:3000')
});

When('I click on Login with email button', () => {
  cy.get('#login-toggle').click()
});

And('I submit login', () => {
  cy.get('#user_email').type('has.fetra@ingedata.ai')
  cy.get('#user_password').type('has.fetra@ingedata.ai')
  cy.get('.login-button').eq(1).click()
});

Then('I should see dashboard page', () => {
  cy.get('#model-errors.callout.flash.info').should('contain', 'Signed in successfully.')
})
