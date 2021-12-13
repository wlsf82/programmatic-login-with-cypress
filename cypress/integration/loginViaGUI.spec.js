it('successfully logs in via GUI', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`).as('getUserModels')

  cy.visit('/')
  cy.get('#userEmail').type(Cypress.env('userEmail'))
  cy.get('#userPassword').type(Cypress.env('userPassword'), { log: false })
  cy.contains('button', 'Login').click()

  cy.wait('@getUserModels')
  cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#!/main`)
  cy.contains('h2', 'Models').should('be.visible')
})
