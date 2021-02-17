describe("Turing Cafe", () => {
    it('Should be allow a user to visit the homepage', () => {
        cy.visit("http://localhost:3000/")
        .get('h1').should('contain', 'Turing Cafe Reservations')
        .get('form input[type=text]').should('be.visible')
        .get('button').should('contain', 'Make Reservation')
        .get('.card').should('be.visible')
    })

    // need to test for the network requests

    it('Should be able to fill out the form with inputs', () => {
        cy.visit("http://localhost:3000/")
          .get("form input[name=name]")
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
          .should("have.value", "2");
    })

    it('Should be able to click the reservation button', () => {
        cy.visit("http://localhost:3000/").get("form button").click();
    })

    it('Should be able to make a reservation and have a new reservation appear on the homepage', () => {
        cy
          .visit("http://localhost:3000/")
          .get("form input[name=name]")
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
          .get("form button")
          .click()
          .get(".card")
          .should("be.visible");
    })

    it('Should be able to click the cancel reservation button', () => {
        cy.visit("http://localhost:3000/")
        .get(".cancelButton")
        .click({multiple: true})
    })

})

//add something to test items inside each card