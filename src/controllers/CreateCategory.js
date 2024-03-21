// Define a class for categories
class Category {
    constructor(name) {
        this.name = name;
        this.expenses = [];
    }

    // Method to add an expense to the category
    addExpense(expenseName, amount) {
        this.expenses.push({ name: expenseName, amount: amount });
    }
}

// Example usage
if (require.main === module) {
    // Create a new category
    const foodCategory = new Category("Food");

    // Add expenses to the category
    foodCategory.addExpense("Groceries", 100);
    foodCategory.addExpense("Restaurant", 50);

    // Print category details
    console.log(`Category: ${foodCategory.name}`);
    for (const expense of foodCategory.expenses) {
        console.log(`Expense: ${expense.name}, Amount: ${expense.amount}`);
    }
}
