/// <reference types='Cypress' />

//now I am importing the 'HomePage' to use those methods in this scripts
//here ../ means I have gone to pageObject folder then mantioning what class I am using
//import cypress from 'cypress'//I don't know whre this come out from
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


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

      //This is the load time out. If I use it here It will work for all lines. If I use it before specific line then I will
      //work from that line to rest of the lines. Better use it once in Cypress.config.json file globally
      ////cypress.config('defaultCommandTimeout', 8000)

      //Creating object of the HomePage here to use those methods
      const homePage = new HomePage
      const productPage = new ProductPage
    
     
      //hard coding url
    ////cy.visit("https://rahulshettyacademy.com/angularpractice/");

    //once evironment variale start working then I do not need the above line. The below line is enough to work on
    cy.visit(Cypress.env('url'))

    //writing name in the name field
    homePage.getEditBox().type(this.data.name)

    //selecting gender as Female
    homePage.getGender().select(this.data.gender)

    //validating two way data binding
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)

    //validating minlength is 2 in name field
    homePage.getEditBox().should('have.attr','minlength',2)

    //Validating if the radio button is disabled or not
    homePage.getEntrepreneaur().should('be.disabled')

    //Clicking on Shop
    homePage.getShopTab().click()

//Array for JS to get data
this.data.productName.forEach(function(element){
  cy.log(element)
  
//Passing the data in the below syntax
cy.selectProduct(element)

  });

  //clicking on Checkout Button on Product Page
  productPage.checkOutButton().click()


//declaring a var for calculating total amount
var sum = 0

//Validating sum from selected product and total amount
cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {

  //If is want to print whatever the text is
  //cy.log($el.text())

  const amount = $el.text()
  //I am using 'var' this time because I am gonna reuse it later to split
  //Const is used when I am not gonna reuse but var is for if I am gonna reuse it
  //Here, Const = constant; var = variable; res = result
  var res = amount.split(" ")

/*
 it is working like:
  res[0] = ₹.
  res[1] = 65000
*/

//Here I can use to print the amount by using index but I preffer the next 1 as it looks good to skip the spaces
//cy.log(res[1])

  //Here I am deleting spaces by using trim
  res = res[1].trim()

  //the below is not gonna work as sum is an integer. the below line is for string.
  ////sum = sum+res()
  
  //we are gonna convert it into integer by adding 'Number' keyword
  sum = Number(sum)+Number(res)

}).then(function(){
//cy.log(sum): it (above) is not gonna work here as JS is asyncronized. we have to resolved the promice by using '.then(function(){})'
///when ever we use any non-cypress command then we have to resolved PROMICE of JS to make it syncronized.See the aboveand below lines
cy.log(sum)

})
cy.get('h3 strong').then(function(element){
  const amount = element.text()
  var res = amount.split(" ")
  var total = res[1].trim()

  //here total is string. I converted it into integer to compare with 'sum' integer
  expect(Number(total)).to.equal(sum)


})


  //clicking on Checkout on checkout page
  cy.contains('Checkout').click()

  //entering INDIA in delivery location field
  cy.get('#country').type('India')


  cy.wait(6000)//I had to use this wait as my config global wait is not working

  //Clicking on INDIA when searching done
  cy.get('.suggestions > ul > li > a').click()

  //Clicking on Checkbox
  //Here click has not been done because the element is coverd by another one
  //Cypress suggested to force click so i did.
  cy.get('#checkbox2').click({force: true})

  //Clicking on Purchase
  cy.get('input[type="submit"]').click()

  //the below assertion is not passed as actual message has some extra word which does not display
  //I am commenting this out and working by capruting text and using 'include'
  ////cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

  //gabing the text and put assertion. '.text' can not work here as text is not cypress command
  ///cy.get('.alert').text()

  //we have to use jQuery method here
  cy.get('.alert').then(function(element){

    const actualText = element.text()

    //different way if assertion instead of using If blog
    expect(actualText.includes("Success! Thank you!")).to.be.true

    //Printinh the message in the log
    cy.log("Actual success message is ",actualText)

  })











   
   
  })
   
   
  })