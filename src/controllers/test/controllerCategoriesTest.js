const { CategoryManager } = require('./src/controllers/controllerCategories');

describe('CategoryManager', () => {
    let categoryManager;

    beforeEach(() => {
        categoryManager = new CategoryManager();
    });

    it('should successfully create a new category and display a success message', () => {
        const result = categoryManager.createCategory('Food');
        expect(result).toEqual({ success: true, message: 'Category created successfully.', category: expect.any(Object) });
        expect(categoryManager.getCategoryNames()).toContain('Food');
    });

    it('should prevent creation of a duplicate category and display an error message', () => {
        categoryManager.createCategory('Travel');
        const result = categoryManager.createCategory('Travel');
        expect(result).toEqual({ success: false, message: 'Category name already exists.' });
    });

    it('should reject invalid category names and display an error message', () => {
        const cases = ['', ' ', 'a'.repeat(51)];
        cases.forEach(name => {
            const result = categoryManager.createCategory(name);
            expect(result).toEqual({ success: false, message: 'Invalid category name.' });
        });
    });

    it('should show the new category in the list of existing categories after creation', () => {
        categoryManager.createCategory('Entertainment');
        const categoryNames = categoryManager.getCategoryNames();
        expect(categoryNames).toContain('Entertainment');
    });
});
