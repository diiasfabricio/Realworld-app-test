class GetStartPage {

    selectorsList() {
        const selectors = {
            getStartGrid: "[fill-rule='nonzero']",
            
        }

        return selectors
    }

    checkGetStartPage() {
        cy.get(this.selectorsList().getStartGrid).should('be.visible')
    }

}

export default GetStartPage