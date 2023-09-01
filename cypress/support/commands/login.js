Cypress.Commands.add('login', (role) => {
  const users = {
    supervisor: "supervisor@ingedata.ai",
    operator: "operator@ingedata.ai",
    officemanager: "officemanager@ingedata.ai",
    productionhead: "productionhead@ingedata.ai",
    superadmin: "superadmin@ingedata.ai"

  };
  const email = users[role];
  const password = "ingedata.test";

  cy.visit('http://localhost:3000')
  cy.get('#login-toggle').click()
  cy.get('#user_email').type(email)
  cy.get('#user_password').type(password)
  cy.get('.login-button').eq(1).click()
  cy.get('#model-errors.callout.flash.info').should('contain', 'Signed in successfully.')
}
);