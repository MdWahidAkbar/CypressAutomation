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











    })

  })