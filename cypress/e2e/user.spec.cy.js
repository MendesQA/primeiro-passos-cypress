import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredencialAlert: "[role='alert']",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  idNameField: ".oxd-input--active"
  
}

  it.only('Login Informado', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorList.idNameField).eq(3).clear().type('emploTest')

  })

  it('Login Falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
    
  })
})