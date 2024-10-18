describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get("#__next").should("be.visible")  //extra step added
  })

  context("Hero section", () => {
    it('The h1 contains the correct text', () => {
      cy.getByData('hero-heading').contains("Testing Next.js Applications with Cypress")
    })

    it("The features on the homepage are correct", () => {

      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")

    })

  })

  context("Courses section", () => {
    it("Course: Testing your first Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })

  })

})

