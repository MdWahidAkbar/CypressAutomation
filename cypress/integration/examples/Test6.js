/// <reference types='Cypress' />

describe('My Third Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


      //Mouse Hover
      //Cypress does not support mouse hover. Here we will use SHOW method from jQuery to do this function
      //If I have to make sure mouse hover to see the list then I have to use this
      //SHOW method can go to the child of immediate parent element. So I have to find a immediate parent locator to click on child element 
      cy.get('div.mouse-hover-content').invoke('show')

      //Clicking on Top, the first in the list
      cy.contains('Top').click()



      //Or cypress can click forcefully if the locator is in invisible mode
      //If I have to click on Top then I can use this method
      //This method should be mommented if INVOKE is functional
      cy.contains('Top').click({force: true})

      //I am validating that url has Top
      cy.url().should('include','top')
   
   
  })
   
   
  })