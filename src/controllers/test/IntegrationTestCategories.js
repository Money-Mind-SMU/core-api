const { expect } = require('chai');
const { Category, CategoryManager } = require('../controllerCategories');

describe('CategoryManager Integration', () => {
    let categoryManager;

    beforeEach(() => {
        categoryManager = new CategoryManager();
    });

    it('should create a category and add an expense to it', () => {
        // Create a new category
        const createResponse = categoryManager.createCategory('Groceries');
        expect(createResponse.success).to.be.true;
        expect(createResponse.message).to.equal('Category created successfully.');
        
        // Add an expense to the new category
        const category = createResponse.category;
        category.addExpense('Apples', 5);

        // Retrieve the added expense to verify it
        expect(category.expenses).to.deep.include({ name: 'Apples', amount: 5 });
    });

    it('should not create a category with invalid name', () => {
        // Attempt to create a category with an invalid name
        const response = categoryManager.createCategory('This Is A Very Very Very Very Long Category Name That Is Invalid');
        expect(response.success).to.be.false;
        expect(response.message).to.equal('Invalid category name.');
    });

    it('should not create duplicate categories', () => {
        // Create a category
        categoryManager.createCategory('Utilities');
        // Attempt to create a duplicate category
        const response = categoryManager.createCategory('Utilities');
        expect(response.success).to.be.false;
        expect(response.message).to.equal('Category name already exists.');
    });

    it('should list all category names', () => {
        // Create multiple categories
        categoryManager.createCategory('Rent');
        categoryManager.createCategory('Utilities');

        // Verify that all category names are listed
        const categoryNames = categoryManager.getCategoryNames();
        expect(categoryNames).to.have.members(['Rent', 'Utilities']);
    });
});
