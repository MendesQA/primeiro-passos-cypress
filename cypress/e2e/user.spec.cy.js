import userData from '../fixtures/user-data.json'
import LoginPaje from '../pajes/loginPaje.js'
import DashboardPaje from '../pajes/dashboardPaje.js'
import MenuPaje from '../pajes/menuPaje.js'
import MyInfoPaje from '../pajes/myInfoPaje.js'


const loginPaje = new LoginPaje()
const dashboardPaje = new DashboardPaje()
const menuPaje = new MenuPaje()
const myInfoPaje = new MyInfoPaje()


describe('Orange HRM Tests', () => {

const selectorList = {

 
  
}

  it.only('Login Informado', () => {
   loginPaje.accessLoginPage()
   loginPaje.loginWithUser(userData.userSucess.username, userData.userSucess.password)
   
   dashboardPaje.checkDashboardPaje()
   
   menuPaje.accessMyInfo()

   myInfoPaje.fillPersonalDetails('First Name', 'Last Name')
   myInfoPaje.fillEmployeDetails('EmployeID', 'Other ID', 'Drivers N Teste', '2025-07-29', '1999-07-24')
   myInfoPaje.fillStatus()
   myInfoPaje.saveButton()

  })

  it('Login Falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
    
  })
})