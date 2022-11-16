/// <reference types='Cypress' />


describe('Frames Test', function() {


  before(() => {
    // root-level hook
    // runs once before all tests

    //Here I am getting the example file for data driven. I used 'then(function)' to resolve the promice
    cy.fixture('example').then(function(data)
    {

      //data of above line if for 'fixture' file but these data can not be used in the test. I am using keyword 'this.data' to get those
      //data available to use in test. =data means fixture data and this.data means I am making available for use outside the fixture loop
      this.data=data



    })

  })


    it('Demo Example', function() {
    
      
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    //I am getting data from fixture file. I am using 'this.data' as 'this.data' is available to use everywhere in the test
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)

    //validating two way data binding
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)

    //Validating property minlenth is 2 (Minimum 2 character must to work functionality)
    //Here jQuery does not have 'minlength' so we can use 'attr' for it and for all attributes that jQuery does not have
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)

    //Validating if the radio button is disabled or not
    cy.get('#inlineRadio3').should('be.disabled')

    //The script will pause at this point. It is like puting a page break in Selenium for debugging
    //we can use "".debug" also at the end of a syntax. That also works as 'pause'
    //once problem is solved then this 'pause' should be deleted otherwise everytime it will pause here
    ////cy.pause()

    //Clicking on Shop
    cy.get(':nth-child(2) > .nav-link').click()

    ////This is the hard coding way to work. We are not gonna hard code
    ////we will make a custom command in "support/command" and will call it. It is shown below from line 65

/*
    //Validating to click on add button of Blackbery mobile
    cy.get('h4.card-title').each(($el, index, $list) => {

      if($el.text().includes('Blackberry')){

        //if class value has space in between then use . instead of space to locate by that elelent
        cy.get('button.btn.btn-info').eq(index).click()

      }
    })
*/
//We are using customed command for above group commented task
//pls see the support/command for customed method created over there
////cy.selectProduct('Blackberry')
////cy.selectProduct('Nokia Edge')

//Instead of writing multiple lines we can put the data in example file and drive the data from there
//Here I am using ["abc,""xyz"] and call that in test case to apply that array

//Array for JS to get data
this.data.productName.forEach(function(element){
  cy.log(element)
  
//Passing the data in the below syntax
cy.selectProduct(element)

  })


   
   
  })
   
   
  })