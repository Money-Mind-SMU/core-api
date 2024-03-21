// Import necessary modules or classes (replace with your actual imports)
const ExpenseManager = require('./core-api/src/controllers/controllerCategories'); // Replace with your actual module path

describe('Expense Manager', () => {
  let expenseManager;

  beforeEach(() => {
    // Initialize an instance of ExpenseManager (replace with your actual class)
    expenseManager = new ExpenseManager();
  });

  it('should create a new category successfully', () => {
    // Test creating a new category with a unique name
    const category = 'Travel Expenses';
    const result = expenseManager.createCategory(category);
    expect(result).toBeTruthy(); // Category creation should succeed
    expect(expenseManager.getCategories()).toContain(category); // Category should appear in the list
  });

  it('should prevent creating a duplicate category', () => {
    // Test creating a category with an existing name
    const existingCategory = 'Food Expenses';
    const result = expenseManager.createCategory(existingCategory);
    expect(result).toBeFalsy(); // Category creation should fail
    expect(expenseManager.getCategories()).not.toContain(existingCategory); // Category should not be added
  });

  it('should reject invalid category names', () => {
    // Test creating a category with an invalid name
    const invalidCategory = 'Invalid Category!@#$';
    const result = expenseManager.createCategory(invalidCategory);
    expect(result).toBeFalsy(); // Category creation should fail
    expect(expenseManager.getCategories()).not.toContain(invalidCategory); // Category should not be added
  });
});
