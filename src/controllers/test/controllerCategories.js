class Category {
    constructor(name) {
        this.name = name;
        this.expenses = [];
    }

    addExpense(expenseName, amount) {
        this.expenses.push({ name: expenseName, amount: amount });
    }
}

module.exports = Category;

// category.test.js (unit tests)
const Category = require('./category');

describe('Category', () => {
    let foodCategory;

    beforeEach(() => {
        foodCategory = new Category('Food');
    });

    test('should create a new category with the given name', () => {
        expect(foodCategory.name).toBe('Food');
    });

    test('should add an expense to the category', () => {
        foodCategory.addExpense('Groceries', 100);
        expect(foodCategory.expenses).toHaveLength(1);
        expect(foodCategory.expenses[0].name).toBe('Groceries');
        expect(foodCategory.expenses[0].amount).toBe(100);
    });

    test('should add multiple expenses to the category', () => {
        foodCategory.addExpense('Groceries', 100);
        foodCategory.addExpense('Restaurant', 50);
        expect(foodCategory.expenses).toHaveLength(2);
    });
});
