class HomePage
{

getEditBox(){

    //Locator for Name field and using "return" keywod to resue it
    return cy.get('input[name="name"]:nth-child(2)')

}//..........................

getTwoWayDataBinding(){

    return cy.get(':nth-child(4) > .ng-untouched')

}//.........................

getGender(){

    return cy.get('select')

}//........................

getEntrepreneaur(){

    return cy.get('#inlineRadio3')

}//......................

getShopTab(){

    return cy.get(':nth-child(2) > .nav-link')

}//......................

}

//I am making this class available for other class to reuse by using this syntax
export default HomePage;