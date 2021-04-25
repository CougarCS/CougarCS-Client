it('shows title', () => {
    cy.visit('/');
    cy.contains("Learn More");
    cy.contains("Test");
});
