import UserData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import SendMoneyPage from '../pages/sendMoneyPage'


const loginPage = new LoginPage()
const sendMoneyPage = new SendMoneyPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(UserData.userSuccess.username, UserData.userSuccess.password)
        sendMoneyPage.getTransationPage()
        sendMoneyPage.sendingMoney(UserData.receivingUser.username)
        
    })
  })

describe('Enviar dinheiro com saldo insuficiente', () => { //Considerando que a conta foi zerada no teste acima
      it('Deve dar erro ao enviar dinheiro', () => {
          
          loginPage.accessLoginPage()
          loginPage.loginWithAnyUser(UserData.userSuccess.username, UserData.userSuccess.password)
          sendMoneyPage.getTransationPage()
          sendMoneyPage.sendingMoneyFail(UserData.receivingUser.username)

  })
})
    
