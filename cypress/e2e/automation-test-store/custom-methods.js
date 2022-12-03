/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
//implicit wait to override the default wait time which will be on each line of the script. Default was 15 sec but I made it 20 sec for this whole script
Cypress.config('defaultCommandTimeout', 20000)


  before(function() {
      cy.fixture('example').then(function(data) {
          //this.data = data;
          globalThis.data = data;
      })
  })
  it("Should be able to submit a successful submission via contact us form", () => {
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
       //here I have used baseUrl from config file. "/"" is enough to call the url
       //explicit wait to override the default wait time which will be explicitly for below line only. It was 2 min but I did it 1 min fot htis line only
      cy.visit("/",{timeout: 60000})
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
      cy.title().should('include', 'WebDriver | Contact Us');
      cy.url().should('include', 'contactus');
      //cy.get('#contact-us').click({force: true})
      // cy.get('[name="first_name"]').type(data.first_name);
      // cy.get('[name="last_name"]').type(data.last_name);
      // cy.get('[name="email"]').type(data.email)
      // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
      // cy.get('[type="submit"]').click();
      // cy.get('h1').should('have.text', 'Thank You for your Message!')
      //here I am using environment variable fro "first_name"
      cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      //here I have used baseUrl from config file. "/"" is enough to call the url
      cy.visit("/")
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
      // cy.get('[name="first_name"]').type(data.first_name);
      // cy.get('[name="last_name"]').type(data.last_name);
      // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
      // cy.get('[type="submit"]').click();
      // cy.get('body').contains('Error: all fields are required');
      cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
  });
})