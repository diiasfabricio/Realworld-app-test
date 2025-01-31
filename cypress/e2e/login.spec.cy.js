import UserData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import GetStartPage from '../pages/getStartPage'


const loginPage = new LoginPage()
const getStartPage = new GetStartPage()


describe('Login Realworld App Tests', () => {

  it('Login - fail', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(UserData.userFail.username, UserData.userFail.password)
    loginPage.checkAccessIvalid()
  })
  
  it('Login - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(UserData.userSuccess.username, UserData.userSuccess.password)
    getStartPage.checkGetStartPage()
   
  })

  
})