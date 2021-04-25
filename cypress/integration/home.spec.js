/// <reference types="cypress" />>
it('shows title', () => {
    cy.visit('/');
    cy.contains("Learn More");
    cy.get("#typed");
    
});
