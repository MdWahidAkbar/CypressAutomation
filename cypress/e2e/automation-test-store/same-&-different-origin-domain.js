/// <reference types="cypress" />

describe("Cypress web security", () => {
    it.skip("Validate visiting two different domains", () => {
        //it is gonna fail as we used regular way to visit 2 super domain
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    //new way of visiting 2 different domains
    //////PROBLEM: - If I use it then test runner is getting freeze. I had to close and reopen the test runner
    it('Origin command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })

        //Same Origin Example: This is same domain in different name so don't get confused
        //cy.visit("https://www.webdriveruniversity.com");
        //cy.visit("https://selectors.webdriveruniversity.com");
    });
})