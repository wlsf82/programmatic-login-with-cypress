it('successfully logs in via GUI', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`).as('getUserModels')
  cy.loginViaGUI()
  cy.wait('@getUserModels')
  cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#!/main`)
  cy.contains('h2', 'Models').should('be.visible')
})
