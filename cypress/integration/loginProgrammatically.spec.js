it('successfully logs in programmatically', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`).as('getUserModels')

  cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
    username: Cypress.env('userEmail'),
    password: Cypress.env('userPassword'),
  }).then((response) => {
    cy.setCookie('sessionId', response.body.sessionId)
    cy.setCookie('userId', response.body.userId)
    cy.setCookie('userName', response.body.userName)
  })

  cy.visit('/#!/main')
  cy.wait('@getUserModels')
  cy.contains('h2', 'Models').should('be.visible')
})
