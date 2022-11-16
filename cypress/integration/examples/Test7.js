/// <reference types='Cypress' />

describe('My Third Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


    //Navigating to new window tab by grabing the link   
    //The below syntax is not gonna work because 'prop' is not cypress command like 'text'
    ////cy.get('#opentab').prop(href)

    //Getting prop is jQuery so we have to maintain promice by using 'then'
    cy.get('#opentab').then(function(e1){

      //Here I am grabing the href property, so I mentioned href.
      //if the child tab domain is same as parent domain then below syntax will work. Whatever the endpoint/subdomain is
      //Example: "rahulshetty.com" is main domain. "rahumshetty.com/'SeleniumPractice'"" is subdomain
      const url = e1.prop('href')

      //to have worked with different domain by using child window, we have to use "targetattr" removal to work on it

      //visiting the url
      cy.visit(url)

      //printing the url in the log
      cy.log(url)



    })





   
   
  })
   
   
  })