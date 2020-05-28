/// <reference types="cypress" />

context("App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it("should render page", () => {
        cy.get(".App")
            .should("be.visible");
    });
});