/// <reference types='Cypress' />

describe('My Third Test Suite', function() {
    it('My First Test Case', function() {
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //for ckecked box, we can use click but cypress has better solution
    //we can use CKECK to click on check box and togather we can make sure(assertion) it is checked by extended .should(be.checked) method
    //Also I am making another assertion to make sure it is Option1 which is checked. Here I used AND because SHOULD already used so AND will be with SHOULD
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

    //Now Unchecking the checked box and assertion to make sure it is unchecked
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //Now I am checking all or specific number of checkboxes. Here it will check 2 and 3
    cy.get('input[type="checkbox"]').check(['option2','option3'])


    //Static Dropdown which is by SELECT option and Assertion at a time is it selected option2 or not
    cy.get('select').select('option2').should('have.value','option2')

  //Dynamic Dropdown
  cy.get('#autocomplete').type('Ind')

  cy.get('.ui-menu-item div').each(($e1, index, $list) => {

    if($e1.text()=="India"){
      cy.wrap($e1).click()
    }

  })

  cy.get('#autocomplete').should('have.value','India')

  //Visibility test of anything
  cy.get('#displayed-text').should('be.visible')
  cy.get('#hide-textbox').click()

  //Not visibility test
  cy.get('#displayed-text').should('not.be.visible')
  cy.get('#show-textbox').click()

  //Again visibility test
  cy.get('#displayed-text').should('be.visible')

  //radio button check
  cy.get('[value = "radio2"]').check().should('be.checked')


















    })

  })