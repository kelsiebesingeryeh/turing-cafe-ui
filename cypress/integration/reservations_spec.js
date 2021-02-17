describe("Turing Cafe", () => {
    it('Should be allow a user to visit the homepage', () => {
        cy.visit("http://localhost:3000/")
        .get('h1').should('contain', 'Turing Cafe Reservations')
        .get('form input[type=text]').should('be.visible')
        .get('button').should('contain', 'Make Reservation')
        .get('.card').should('be.visible')
    })

    it('Should see reservation cards displayed on the homepage', () => {
        cy.fixture("testReservationData.json")
          .then((reservationData) => {
            cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
              statusCode: 200,
              body: {
                reservations: reservationData,
              },
            })
          })
        //   .get(".card")
        //   .should("exist")
        //   .get(".reservationName")
        //   .should('exist')
    })

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

    it.only('Should be able to make a post request after filling out the form', () => {
        cy.visit("http://localhost:3000/")
          .intercept("POST", "http://localhost:3001/api/v1/reservations", {
            statusCode: 201,
            body: {
              id: 500,
              name: "Kelsie Yeh",
              date: "6/5",
              time: "7:00",
              number: 2,
            },
          })
          .get("form input[name=name]")
          .type("kelsie b")
          .should("have.value", "kelsie b")
          .get("form input[name=date]")
          .type("5/5")
          .should("have.value", "5/5")
          .get("form input[name=time]")
          .type("6:00")
          .should("have.value", "6:00")
          .get("form input[name=number]")
          .type("5")
          .should("have.value", "5")
          .get("form button")
          .click()
          .get(".card")
          .should("be.visible");
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

    it.skip('Should be able to click the cancel reservation button', () => {
        cy.visit("http://localhost:3000/")
        .get(".cancelButton")
        .click({multiple: true})
    })

    it.skip('Should be able to cancel the reservation and see the reservation disappear from the screen', () => {
        cy.visit("http://localhost:3000/")
          .get(".cancelButton")
          .click({ multiple: true });
    })

})

//add something to test items inside each card