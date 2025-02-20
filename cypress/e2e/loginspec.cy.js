import userData from '../fixtures/user-data.json'

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
    cy.visit('/authentication/login-v2')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/dashboard/estatistica')
    cy.get(selectorList.dashboardGrid)
  })

  it('Login sem sucesso', () => {
    cy.visit('/authentication/login-v2')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
    
  })
})