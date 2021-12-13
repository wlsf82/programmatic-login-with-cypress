Cypress.Commands.add('loginViaAPI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')
) => {
  cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
    username: email,
    password,
  }).then((response) => {
    cy.setCookie('sessionId', response.body.sessionId)
    cy.setCookie('userId', response.body.userId)
    cy.setCookie('userName', response.body.userName)
    cy.visit('/#!/main')
  })
})

Cypress.Commands.add('loginViaGUI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')
) => {
  cy.visit('/')
  cy.get('#userEmail').type(email)
  cy.get('#userPassword').type(password, { log: false })
  cy.contains('button', 'Login').click()
})
