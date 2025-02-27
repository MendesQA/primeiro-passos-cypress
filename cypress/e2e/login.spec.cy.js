import userData from '../fixtures/user-data.json'
import LoginPaje from '../pajes/loginPaje.js'
import DashboardPaje from '../pajes/dashboardPaje.js'

const Chance = require('chance')

const loginPaje = new LoginPaje()
const dashboardPaje = new DashboardPaje()

describe('Login Orange HRM Tests', () => {

  it('Login Sucess', () => {
    loginPaje.accessLoginPage()
    loginPaje.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPaje.checkDashboardPaje()
  })

  it('Login Falha', () => {
    loginPaje.accessLoginPage()
    loginPaje.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPaje.checkAccessInvalid()
  })

})
