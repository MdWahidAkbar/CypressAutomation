/// <reference types='Cypress' />

describe('My Third Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


    //Atomating table content
    //Travers to Parent child and Siblings
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      const text = $e1.text()
      if(text.includes("Python"))
      {

        //Here I am saying to go to the 'index' and then 'next' means to next sibling and 'then' is for JQuery promise
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {

          const priceText = price.text()
          expect(priceText).to.equal('25')

        })
      }
   
  })
   
   
  })
   
   
  })