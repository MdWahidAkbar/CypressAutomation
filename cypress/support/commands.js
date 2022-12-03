// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add("selectProduct", (productName) => { 

    cy.get('h4.card-title').each(($el, index, $list) => {

        if($el.text().includes(productName)){
    
          //if class value has space in between then use . instead of space to locate by that elelent
          cy.get('button.btn.btn-info').eq(index).click()
    
        }
      })
 })

 // -- this is for avoid log in page and getting logged in
 Cypress.Commands.add("LoginAPI",()=>{

 cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
 {userEmail: "mdwahid.akbar@gmail.com", userPassword: "Password@123"}).
 then(function(response){

  //Validating 200 status code for correct credential
    expect(response.status).to.eq(200)

    //grabing the token and puting it for available to all classes
    Cypress.env('token',response.body.token)

 })

 })


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

//This is for Bruno course
Cypress.Commands.add("selectProduct", productName => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if($el.text().includes(productName)) {
          cy.wrap($el).click()
      }
  });
})

//this data is taken from products.jason 
Cypress.Commands.add("addProductToBasket", productName => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if($el.text() === productName) {
          cy.log($el.text())
          cy.get('.productcart').eq(index).click();
      }
  });
});


Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
  cy.get('[name="first_name"]').type(firstName);
  cy.get('[name="last_name"]').type(lastName);
  cy.get('[name="email"]').type(email)
  cy.get('textarea.feedback-input').type(comment)
  cy.get('[type="submit"]').click();
  cy.get($selector).contains(textToLocate)
})
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
