/// <reference types="cypress" />

context("RunningTotal", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should render page", () => {
        cy.get(".header")
            .should("be.visible");
    });
});