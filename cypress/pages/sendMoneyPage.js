class SendMoneyPage {

    selectorsList() {
        const selectors = {
            newTransationButton: "[href='/transaction/new']",
            seachContactBox: "[placeholder='Search...']",
            userKristian: "[data-test='user-list-item-GjWovtg2hr']",
            amountBox: "[name='amount']",
            addNoteBox: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            balanceField: "[data-test='sidenav-user-balance']"
        }

        return selectors
    }

    getTransationPage() {
        cy.get(this.selectorsList().newTransationButton).click()
        cy.get(this.selectorsList().seachContactBox).should('be.visible')
    }
    
    sendingMoney(username) {
        cy.get(this.selectorsList().balanceField).invoke('text').then((balanceText) => {
            // Extraindo apenas os números do saldo
            const balance = parseInt(balanceText.replace(/[^\d]/g, ''), 10) // Converte para número inteiro
    
            // Condicionando a um valor acima de 0
            if (balance > 0) {
                cy.get(this.selectorsList().seachContactBox).type(username)
                cy.get(this.selectorsList().userKristian).click()
                cy.get(this.selectorsList().amountBox).type(balance.toString()) // Converte número para string antes de inserir
                cy.get(this.selectorsList().addNoteBox).type('Quitacao de divida')
                cy.get(this.selectorsList().payButton).click()
                cy.get('body').should('have.length', 1)
            } else {
                cy.log('Saldo insuficiente para realizar a transação')
                throw new Error('Saldo insuficiente para realizar a transação')
            }
        })
    }
    

    sendingMoneyFail(username) {
       
        cy.get(this.selectorsList().seachContactBox).type(username)
        cy.get(this.selectorsList().userKristian).click()
        cy.get(this.selectorsList().amountBox).type('1000')
        cy.get(this.selectorsList().addNoteBox).type('Quitacao de divida')
        cy.get(this.selectorsList().payButton).click()
        // cy.get('body').should('contain', 'Transaction Error! Insufficient balance!')
        //cy.get('body').should('not.have.class', 'Transaction Submitted!')
        cy.get('body').should('have.length', 2)//método correto! Ao final o length deve indicar 2(insucesso)
        
    }
        //Verificar uma forma de alternar entre os users
        

}

    
export default SendMoneyPage