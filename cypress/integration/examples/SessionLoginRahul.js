
/// <reference types="cypress" />

//const neatCSV = require('neat-csv')

import neatCSV from 'neat-csv';

let productName

describe('JWT Session', () => {

  it('is logged in through local storage', async() => {



    cy.LoginAPI().then(function()

    {

        cy.visit("https://rahulshettyacademy.com/client",

        {

            onBeforeLoad :function(window)

            {

                window.localStorage.setItem('token',Cypress.env('token'))

            }



        })       



    })

    cy.get(".card-body b").eq(1).then(function(ele)

      {

      productName =  ele.text();

      })

    cy.get(".card-body button:last-of-type").eq(1).click();

    cy.get("[routerlink*='cart']").click();

    cy.contains("Checkout").click();

    cy.get("[placeholder*='Country']").type("ind")

    cy.get('.ta-results button').each(($e1, index, $list) => {



      if($e1.text()===" India")

      {

          cy.wrap($e1).click()

      }

  })

    cy.get(".action__submit").click();

    cy.wait(2000)

    cy.get(".order-summary button").click();

   

    //below dynamic file path finder is not working in here so I used hard coding file path which is at line 82
  //cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_mdwahid.akbar.csv")

  //Hardcoding file path
  cy.readFile("C:\Users\Wahid.Akbar\CypressAutomation\cypress\downloads\order-invoice_mdwahid.akbar.csv")

  .then(async(text)=>

  {

    const csv =  await neatCSV(text)

    console.log(csv)

    const actualProductCSV = csv[0]["Product Name"]

    expect(productName).to.equal(actualProductCSV)



 

  })

  })

  })



