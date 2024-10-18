describe('Newsletter subcribe form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get("#__next").should("be.visible")  //extra step added
  })

  it('Allows users to subcribe to the email list', () => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("Does NOT allow and invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("Practice: Email already exits", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com")
      .contains("already exists. Please use a different email address.")
  })

  it("Extra test: empty email", () => {
    cy.getByData("submit-button").click()
    cy.getByData("error-message")
      .should("exist")
      .contains("Email is required")

  })

})