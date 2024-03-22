class Category {
    constructor(name) {
        this.name = name;
        this.expenses = [];
    }

    addExpense(expenseName, amount) {
        this.expenses.push({ name: expenseName, amount: amount });
    }
}

class CategoryManager {
    constructor() {
        this.categories = [];
    }

    createCategory(name) {
        // Validation: empty, excessively long name, or contains special characters
        if (!name || name.length > 50 || !this.isValidName(name)) {
            return { success: false, message: 'Invalid category name.' };
        }

        // Check for duplicate category names
        if (this.categories.some(category => category.name.toLowerCase() === name.toLowerCase())) {
            return { success: false, message: 'Category name already exists.' };
        }

        // Create and add the new category
        const newCategory = new Category(name);
        this.categories.push(newCategory);
        return { success: true, message: 'Category created successfully.', category: newCategory };
    }

    isValidName(name) {
        // Example validation: names should not contain special characters and should not be just whitespace
        // Expand the regex as needed for other rules
        return /^[a-zA-Z0-9 ]*$/.test(name) && /\S/.test(name);
    }

    getCategoryNames() {
        return this.categories.map(category => category.name);
    }
}

module.exports = { Category, CategoryManager }; // For unit testing
