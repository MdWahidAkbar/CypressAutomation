/// <reference types="cypress" />

describe("Handling IFrame & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()

            //capturing the text from the iframe popup
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        })

        //clicking on CLOSE on the iframe popup
        cy.get('@modal').contains('Close').click()
    });
})