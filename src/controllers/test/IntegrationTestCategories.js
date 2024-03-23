describe('CategoryManager', () => {
    it('should allow creation of a new category and use it for a new income entry', () => {
        // Navigate to the category management section
        cy.visit('/settings/categories');

        // Click on the option to add a new category
        cy.get('#add-category-button').click();

        // Enter the new category name and select the type
        cy.get('#category-name-input').type('Freelance Income');
        cy.get('#category-type-select').select('Income');

        // Submit the form to create the new category
        cy.get('#submit-category-button').click();

        // Navigate to the income management section
        cy.visit('/income');

        // Attempt to add a new income entry
        cy.get('#add-income-button').click();

        // Verify that "Freelance Income" is an available option and select it
        cy.get('#category-select').should('contain', 'Freelance Income').select('Freelance Income');

        // Fill in the rest of the required details for the income entry
        cy.get('#income-amount-input').type('5000');
        cy.get('#income-date-input').type('2022-01-01');

        // Submit the income entry
        cy.get('#submit-income-button').click();
    });
});
