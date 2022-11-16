/// <reference types='cypress' />

//Adding csv reading package
const neatCSV = require('neat-csv') 
//we can use either above line or below line
//import neatCSV from 'neat-csv';

let productName

describe('JWT Session', () => {

    it('Is logged in through local storage', async() => {
      
  
      //It is not cypress command so need to maintain promice
      cy.LoginAPI().then(function()
      {
          cy.visit("https://rahulshettyacademy.com/client",
        {
          //I am saying to do the below before loading the above url
            onBeforeLoad : function(window)
          {
            //I am saying to window to localstorage to set token that I put as env varialbe in Command file
              window.localStorage.setItem('token',Cypress.env('token'))
          }


        })



      })

      //Here I am storing which Item I am clicling to compare what I got from CSV
      cy.get(".card-body b").eq(1).then(function(ele)

      {

      productName =  ele.text();

      })

      cy.get(".card-body button:last-of-type").eq(1).click()

      cy.pause()

      //cy.get("button[routerlink*='cart']").click
      cy.get(':nth-child(4) > .btn').click()

      cy.contains('Checkout').click()

     
 /*     
      cy.get("input[placeholder*='Country']").type('Ind')
    
 
 //Somehow the below syntax is not working here
      cy.get('.ta-results button').each(($el,index,$list)=>{

        if($el.text() === "India")
        {
          cy.wrap($el).click()
        }

      })

      //the above loop is failling to click on India
  

      cy.get(".btnn.action__submit").click
*/

      cy.get("input[placeholder*='Country']").type('India')
      cy.get(':nth-child(3) > .ng-star-inserted').click()


      cy.get(".action__submit").click()

      cy.wait(2000)

      cy.get(".order-summary button").click()


      //This is to read the CSV file data
  cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_mdwahid.akbar.csv")

  .then(async(text)=>

  {

    //This is (aysnc & await) another way of maintaining promice like ".then(function)"
    const csv =  await neatCSV(text)

    console.log(csv)

    //Here there is a space in between Product and Name. If it is 1 world then we don't need [] we can directly use .ProductName
    const actualProductCSV = csv[0]["Product Name"]

    expect(productName).to.equal(actualProductCSV)


  })








    })

  })