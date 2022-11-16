/// <reference types='Cypress' />

describe('My Second Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca')
    cy.wait(1000)

    cy.get('.products').as('productLocator')

    //Using loop to find "Cashew" to clink on ADD TO CART
    //Here $el is the first element then 0 index and $list means total number
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    const textVeg = $el.find('h4.product-name').text()
    //Here 'include'js means 'contains' in selenium java
    if(textVeg.includes('Cashews')){
      //we have to use cy.wrap to make click method active in loop
      cy.wrap($el).find('button').click()
    }
    })

    //Clicking on Cart
    cy.get('.tada').click()
    //Clicking on Proceed to checkout
    cy.contains('PROCEED TO CHECKOUT').click()

    //Either
    //cy.get(':nth-child(14)').click()
    //or
    cy.contains('Place Order').click()










    })

  })