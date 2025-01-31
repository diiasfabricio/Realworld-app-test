import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import SingUpPage from '../pages/singUpPage'


const loginPage = new LoginPage()
const singUpPage = new SingUpPage()

describe('Sing Up Realworld App Tests', () => {


  it('New User Registration', () => {
    loginPage.accessLoginPage()
    loginPage.singUpButton()

    singUpPage.checkSingUpPage()

    singUpPage.fillPersonalDetails('fabricio', 'diias', 'diiasfabricio','1234','1234' )    
    singUpPage.saveForm()
  })

  it('New User Registration with incomplete data - fail', () => {
    loginPage.accessLoginPage()
    loginPage.singUpButton()

    singUpPage.checkSingUpPage()

    singUpPage.fillIncompletePersonalDetails('fabricio','1234','1234' )    
    cy.get('[href="/signup"]').should('not.exist')

  })
})

