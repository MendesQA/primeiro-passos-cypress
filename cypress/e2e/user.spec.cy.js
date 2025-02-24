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
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-mm-dd']",
  dateCloseButton: ".--close",
  saveButton: "[type='submit']"
  
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
    cy.get(selectorList.genericField).eq(3).clear().type('emploTest')
    cy.get(selectorList.genericField).eq(4).clear().type('OherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(7).clear().type('1999-07-24')
    cy.get(selectorList.genericField).eq(8).clear().type('sinNumberTest')
    //cy.get(selectorList.dateField)
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()

  })

  it('Login Falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
    
  })
})