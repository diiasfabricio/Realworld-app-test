class LoginPage {

    selectorsList() {
        const selectors = {
            singUpButton: "[href='/signup']",
            userNameField: "[name='username']",
            passwordField: "[type='password']",
            loginButton: "[tabindex='0']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    singUpButton() {
        cy.get(this.selectorsList().singUpButton).click()
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        
    }

    checkAccessIvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

}

export default LoginPage