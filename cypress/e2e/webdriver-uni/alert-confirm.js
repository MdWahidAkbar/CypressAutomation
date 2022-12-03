/// <reference types="cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });
    it("Validate js confirm alert box works correctly when clicking ok", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        cy.on('window:alert', (str) => {
        ////cy.on('window:confirm', (str) => {
            //if i write the below line then it will click on the other button instead of OK button
            //Note: It supposed to click on CANCEL button but it is not working.When I used ('window:confirm') then it worked
            ////return false;

            //by the below line, I am saying to click on OK which is cypress inbuild system to click on confirm popup
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

        
    });

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')




    });
})