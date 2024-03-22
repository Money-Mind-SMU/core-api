const { CategoryManager } = require('../controllerCategories');
const assert = require('assert');

// Custom assertion function to check if the value is an Object
function assertIsObject(value) {
    assert.strictEqual(typeof value, 'object');
}

describe('CategoryManager', () => {
    let categoryManager;

    beforeEach(() => {
        categoryManager = new CategoryManager();
    });

    it('should successfully create a new category and display a success message', () => {
        const result = categoryManager.createCategory('Food');
        assertIsObject(result.category);
        assert.ok(categoryManager.getCategoryNames().includes('Food'));
    });

    it('should prevent creation of a duplicate category and display an error message', () => {
        categoryManager.createCategory('Travel');
        const result = categoryManager.createCategory('Travel');
        assert.deepStrictEqual(result, { success: false, message: 'Category name already exists.' });
    });

    it('should reject invalid category names and display an error message', () => {
        const cases = ['', ' ', 'a'.repeat(51)];
        cases.forEach(name => {
            const result = categoryManager.createCategory(name);
            assert.deepStrictEqual(result, { success: false, message: 'Invalid category name.' });
        });
    });

    it('should show the new category in the list of existing categories after creation', () => {
        categoryManager.createCategory('Entertainment');
        assert.ok(categoryManager.getCategoryNames().includes('Entertainment'));
    });
});
