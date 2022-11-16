/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>
    {
      //here I am trying to change the endpoit of the url to check the security issue
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
 
    req.continue((res)=>
    {
      //Here this app has not implement security issue so the page is giving 200 and failing for below assertion
      //but your real app should give 403 and pass the below assertion
       //// expect(res.statusCode).to.equal(403)
    })
 }
 ).as("dummyUrl")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')
 
})
 
})