describe("Turing Cafe", () => {

    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
    })

    it('Should be allow a user to visit the homepage', () => {
        cy.visit("http://localhost:3000/")
        .get('h1').should('contain', 'Turing Cafe Reservations')
        .get('form input[type=text]').should('be.visible')
        .get('button').should('contain', 'Make Reservation')
    })

    // need to test for the network requests

    it('Should be able to fill out the form with inputs', () => {
        cy.get("form input[name=name]")
          .type("kelsie")
          .should("have.value", "kelsie")
          .get("form input[name=date]")
          .type("6/5")
          .should("have.value", "6/5")
          .get("form input[name=time]")
          .type("7:00")
          .should("have.value", "7:00")
          .get("form input[name=number]")
          .type("2")
          .should("have.value", "2")
    })

   
    
    // reservation cards

    //Write tests covering what should be displayed on the page when the user first visits.
// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new reservation to the page.


})