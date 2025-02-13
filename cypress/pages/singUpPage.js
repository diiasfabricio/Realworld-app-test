class SingUpPage {

    selectorsList() {
        const selectors = {
            singUpGrid: "[data-test='signup-title']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPassWord: "[name='confirmPassword']",
            subimitButton: "[type='submit']",   
        }
      
        return selectors

    }

    checkSingUpPage () {
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().singUpGrid).should('be.visible')

    }


    fillPersonalDetails(firstName, lastName, userName, password, confirmPassword ) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().userNameField).clear().type(userName)
        cy.get(this.selectorsList().passwordField).clear().type(password)
        cy.get(this.selectorsList().confirmPassWord).clear().type(confirmPassword)
        
    }

    
    saveForm() {
        cy.get(this.selectorsList().subimitButton).click({force: true})
        cy.get('body').should('have.length', 1)
    }

    fillIncompletePersonalDetails(firstName, password, confirmPassword ) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().passwordField).clear().type(password)
        cy.get(this.selectorsList().confirmPassWord).clear().type(confirmPassword)
        
    }

}


export default SingUpPage