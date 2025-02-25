import userData from '../fixtures/user-data.json'
import LoginPaje from '../pajes/loginPaje.js'

const loginPaje = new LoginPaje()

describe('Orange HRM Tests', () => {

const selectorList = {
  selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-mm-dd']",
  dateCloseButton: ".--close",
  saveButton: "[type='submit']",
  nationalButton: ".oxd-select-text-input"
  
}

  it.only('Login Informado', () => {
   loginPaje.accessLoginPage()
   loginPaje.loginWithUser(userData.userSucess.username, userData.userSucess.password)
   
    
   // cy.get(selectorList.loginButton).click()
   // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
   // cy.get(selectorList.dashboardGrid)
   // cy.get(selectorList.myInfoButton).click()
   // cy.get(selectorList.firstNameField).clear().type('firstNameTest')
   // cy.get(selectorList.lastNameField).clear().type('lastNameTest')
   // cy.get(selectorList.genericField).eq(3).clear().type('emploTest')
   // cy.get(selectorList.genericField).eq(4).clear().type('OherIdTest')
   // cy.get(selectorList.genericField).eq(5).clear().type('DriverLicenseTest')
   // cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
   // cy.get(selectorList.dateCloseButton).click()
   // cy.get(selectorList.genericField).eq(7).clear().type('1999-07-24')
   // cy.get(selectorList.genericField).eq(8).clear().type('sinNumberTest')
   // cy.get(selectorList.nationalButton).eq(0).click()
   // cy.get(selectorList.saveButton).eq(0).click()
   // cy.get('body').should('contain', 'Successfully Updated')
   // cy.get('.oxd-toast-close').click()

  })

  it('Login Falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
    
  })
})