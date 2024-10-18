describe("User journey", () => {
    it("A user can find a course in the home page and complete the courses lessons", () => {

        // STEP 01: From the home page to the first course
        cy.visit('http://localhost:3000')
        cy.getByData("course-0").find("a").contains("Get started").click()          // Go to the first course
        
        cy.log("Step 1 completed")

        //STEP 02: Start 'Testing Your First Next.js Application' course
        cy.location("pathname")                       // Check the URL is the correct one
            .should("equal", "/testing-your-first-application")
        cy.getByData("next-lesson-button")            // Search the button
            .contains("Start Course")                 // Extra step: Check the text displayed in the button
            .click()                                  // Go to the start course

        cy.log("Step 2 completed")

        //STEP 03: App Install & Overview page. Answer the question and go to the next lesson
        cy.location("pathname")                       // Check the URL is the correct one
            .should("eq", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").click()    // Check the 'True' option
        cy.getByData("next-lesson-button")            // Click on the next lesson button
            .contains("Next Lesson")
            .click()

        cy.log("Step 3 completed")

        //STEP 04: Installing Cypress page. Answer the question and go to the next lesson
        cy.location("pathname")
            .should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").click()    // Check the 'True' option
        cy.getByData("next-lesson-button")            // Click on the next lesson button
            .contains("Next Lesson")
            .click()
        
        cy.log("Step 4 completed")

        //STEP 05: Setting data page. Answer the question and go to the next lesson
        cy.location("pathname")
            .should("eq", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").click()    // Check the 'True' option
        cy.getByData("next-lesson-button")            // Click on the complete lesson button
            .contains("Complete Course")
            .click()
        
        cy.log("Step 5 completed")

        //STEP 06: Redirection to the home page
        cy.location("pathname")
            .should("eq", "/")
        cy.location("host")                       
            .should("equal", 'localhost:3000')
        
        cy.log("Step 6 completed")

    })


})