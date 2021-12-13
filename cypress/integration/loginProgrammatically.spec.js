it('successfully logs in programmatically', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`).as('getUserModels')
  cy.loginViaAPI()
  cy.wait('@getUserModels')
  cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#!/main`)
  cy.contains('h2', 'Models').should('be.visible')
})
