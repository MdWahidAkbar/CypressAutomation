/// <reference types='Cypress' />
/// <reference types='cypress-iframe' />
// use the above 2 lines to get auto suggestions 
//import this below package for iframe to work
import 'cypress-iframe' 

describe('Frames Test', function() {
    it('Demo Example', function() {
    
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


    //Cypress newlly enabled iframe handling. I have to install a plugin for it
    //the plugin is: "npm install -D cypress-iframe". Put is in terminal and hit enter
    //then import the package in the spec: import 'cypress-iframe' like I did above

    //I have recognized this frame
    cy.frameLoaded('#courses-iframe')

    //Now using iframe to to locate element in it
    //As there are 2 locators in the same link I used index to click on
    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    cy.wait(1000)

    //Validating there are only two membership offer
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)








   
   
  })
   
   
  })