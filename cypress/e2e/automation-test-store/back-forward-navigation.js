/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        //navigate to new browser
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        //Navigate back to homepage again
        cy.go('back')
        //reload the page
        cy.reload()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        //cy.reload(true) //reload without using cache

        //navigate to contact us page again
        cy.go('forward')
        cy.url().should('include', 'contactus')

        //Navigate back to homepage again
        cy.go('back')

        //Navigate to Login Porlat page
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')

         //Navigate back to homepage again
        cy.go('back')

        //navigate to to do list page
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')

         //Navigate back to homepage again
        cy.go('back')
    });
})