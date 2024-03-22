class Category {
    constructor(name) {
        this.name = name;
        this.expenses = [];
    }

    addExpense(expenseName, amount) {
        this.expenses.push({ name: expenseName, amount });
    }
}

class CategoryManager {
    constructor() {
        this.categories = [];
    }

    createCategory(name) {
        // Validation for empty name or excessively long name
        if (!name || name.length > 50) {
            return { success: false, message: 'Invalid category name.' };
        }

        // Check for duplicate category names
        if (this.categories.some(category => category.name === name)) {
            return { success: false, message: 'Category name already exists.' };
        }

        // Create and add the new category
        const newCategory = new Category(name);
        this.categories.push(newCategory);
        return { success: true, message: 'Category created successfully.', category: newCategory };
    }

    getCategoryNames() {
        return this.categories.map(category => category.name);
    }
}

// Example usage
const categoryManager = new CategoryManager();
console.log(categoryManager.createCategory('Food')); // Should succeed
console.log(categoryManager.createCategory('')); // Should fail - invalid name
console.log(categoryManager.createCategory('Food')); // Should fail - duplicate
console.log(categoryManager.getCategoryNames()); // Should list existing categories
