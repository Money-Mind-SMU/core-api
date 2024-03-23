const assert = require('assert');
const { Category, CategoryManager } = require('../controllerCategories');

describe('CategoryManager Integration', () => {
    let categoryManager;

    beforeEach(() => {
        categoryManager = new CategoryManager();
    });

    it('should create a category and add an expense to it', () => {
        // Create a new category
        const createResponse = categoryManager.createCategory('Groceries');
        assert.strictEqual(createResponse.success, true);
        assert.strictEqual(createResponse.message, 'Category created successfully.');
        
        // Add an expense to the new category
        const category = createResponse.category;
        category.addExpense('Apples', 5);

        // Retrieve the added expense to verify it
        assert.deepStrictEqual(category.expenses, [{ name: 'Apples', amount: 5 }]);
    });

    it('should not create a category with invalid name', () => {
        // Attempt to create a category with an invalid name
        const response = categoryManager.createCategory('This Is A Very Very Very Very Long Category Name That Is Invalid');
        assert.strictEqual(response.success, false);
        assert.strictEqual(response.message, 'Invalid category name.');
    });

    it('should not create duplicate categories', () => {
        // Create a category
        categoryManager.createCategory('Utilities');
        // Attempt to create a duplicate category
        const response = categoryManager.createCategory('Utilities');
        assert.strictEqual(response.success, false);
        assert.strictEqual(response.message, 'Category name already exists.');
    });

    it('should list all category names', () => {
        // Create multiple categories
        categoryManager.createCategory('Rent');
        categoryManager.createCategory('Utilities');

        // Verify that all category names are listed
        const categoryNames = categoryManager.getCategoryNames();
        assert.deepStrictEqual(categoryNames, ['Rent', 'Utilities']);
    });
});
