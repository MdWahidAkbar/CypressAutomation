/// <reference types='Cypress' />

describe('My First Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca')
    cy.wait(1000)

    //If there is more than expected locator we can skip invisible locator
    //cy.get('.product').should('have.length',4)

    //Way to skip invisible locator
    //cy.get('.product:visible').should('have.length',4)

    //Other way to find the exact product length-Parent child travers
    //cy.get('.products .product').should('have.length',4)

    //Parent Child Chaining
    cy.get('.products').find('.product').should('have.length',4)

    //Concept of Aliacis. We can put a locator (if it is used multiple times) into a varialbe and can use it by calling it's name
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

    //Finding 2nd Item and clicking on ADD TO CART.
    //Here "eq(2)" means I said to find index 2 and click on ADD TO CART button
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    //Using loop to find "Cashew" to clink on ADD TO CART
    //Here $el is the first element then 0 index and $list means total number
    cy.get('.products').find('.product').each(($el, index, $list) => {
    const textVeg = $el.find('h4.product-name').text()
    //Here 'include'js means 'contains' in selenium java
    if(textVeg.includes('Cashews')){
      //we have to use cy.wrap to make click method active in loop
      cy.wrap($el).find('button').click()
    }
    })

    //Applying assertion for Logo name
    cy.get('.brand').should('have.text','GREENKART')


    //this is to write something in log of cypress
    //Here we can not use Elelemt and than make a varialbe and click. We have to use 'Than' to make it syncronize
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())
    })










    })

  })