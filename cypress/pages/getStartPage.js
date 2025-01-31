class GetStartPage {

    selectorsList() {
        const selectors = {
            getStartGrid: "[data-test='user-onboarding-dialog-title']",
            
        }

        return selectors
    }

    checkGetStartPage() {
        cy.get(this.selectorsList().getStartGrid).should('be.visible')
    }

}

export default GetStartPage