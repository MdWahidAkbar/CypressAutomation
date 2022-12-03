/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    it('Upload a file....', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

        //for this you have to put the file in fixture folder. Pls see the below PATH
        cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
        cy.get("#submit-button").click();
    });

    it('Upload No file...', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
        cy.get("#submit-button").click();
    });
});