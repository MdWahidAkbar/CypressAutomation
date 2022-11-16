/// <reference types='Cypress' />

describe('My Third Test Suite', function() {

    it('My First Test Case', function() {

      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
      
  //In intercept we have 2 Json object like below
  ////cy.intercept({requestobject}, {responseobject})

  //practical of above line below
  cy.intercept({ 

    //in request object we will put Method (GET, POST etc) and request url
    method : 'GET',
    url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
  }, 

  {
    //in response object we can put our expected response
    statusCode: 200,

    //I put just one body to moke the rsponse. to validate that one response is displayed and 'Oops only 1 Book available' is found 
    body: [{
          "book_name": "null",
          "isbn": "SPY40",
          "aisle": "2529857"
        }] 
  
  //I am puting all above call and response in a reference varialbe ('booksretrievals')
  }).as('booksretrievals')

  //when I click on library button then above call will be generated
  cy.get('button[class="btn btn-primary"]').click()

  //then I will wait until the reference/promise is resolved. And this will resolved once cypress succefully mocked the given body to the site
  cy.wait('@booksretrievals')


  //Now validating the message "Oops only 1 Book available"
  cy.get('p').should('have.text','Oops only 1 Book available')










    })

  })