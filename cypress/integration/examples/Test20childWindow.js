/// <reference types='Cypress' />

describe('My Third Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Alert Automation. Cypress click on Alert on OK
    cy.get('#alertbtn').click()

    //getting the text from Alert popup and compare it with expected text
    //"str" will store the text
    cy.on('window:alert',(str)=>
    {
      //Mocha framework
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    
    
    })

    //Handling confirm Button. Cypress Auto Click on Confirm
    cy.get('[value = "Confirm"]').click()

    //Getting Text from Confirm popup
    cy.on('window:confirm',(str)=>
    {
      //Mocha framework
      expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })

      //Handling Child window.
      //Here, Cypress can not work on child window. It has to be opened on the same window to work on

      cy.get('#opentab').invoke('removeAttr','target').click()
     
      
/*
//or we can use the below option to handle child window
    cy.get('#opentab').then(function(elmnt)
    {
    const tab = elmnt.prop('href')
    cy.visit(tab)
    })
*/
    

  //Validating I am navigated to right url by using contain as a part of the url
    cy.url().should('include','rahulshettyacademy')

    //going back to Parent window by using back button
    cy.go('back')
    
   











    })

  })