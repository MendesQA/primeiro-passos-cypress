describe('Constel Testes', () => {

const selectorList = {
  usernameField: "[aria-describedby='login-email']",
  passwordField: "[aria-describedby='login-password']",
  loginButton: ".btn-primary",
  selectionTitleTopBar: ".text-white",
  dashboardGrid: "[href='/dashboard/estatistica']",
  wrongCredencialAlert: ".alert-body"

}

  it('Login com sucesso', () => {
    cy.visit('https://constel.builders/pages/authentication/login-v2')
    cy.get(selectorList.usernameField).type('gabriel@audax.com')
    cy.get(selectorList.passwordField).type('1234')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/dashboard/estatistica')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login sem sucesso', () => {
    cy.visit('https://constel.builders/pages/authentication/login-v2')
    cy.get(selectorList.usernameField).type('gabriel@audax.com')
    cy.get(selectorList.passwordField).type('123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
    
  })
})