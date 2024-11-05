
describe("First Test 01 ", () => {
    it("positive test for title", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should('eq', 'My Shop')
    })

    it("Negative test for title", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should('eq', 'My shops')
    })
    
    it("search T-shirt item ", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("#search_query_top").type("T-shirt")
        cy.get('[name="submit_search"]').click()
        cy.get(".lighter").contains("T-shirt")
    })
})