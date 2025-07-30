// 1. Create an array of product objects (id, name, price, quantity)
const products = [
  { id: 1, name: 'Laptop', price: 1000, quantity: 2 },
  { id: 2, name: 'Phone', price: 500, quantity: 0 },
  { id: 3, name: 'Headphones', price: 150, quantity: 3 },
  { id: 4, name: 'Monitor', price: 300, quantity: 1 },
];

// 2. Use filter to get all products with quantity > 0 (available items)
const availableProducts = products.filter(product => product.quantity > 0);
console.log('Available Products:', availableProducts);

// 3. Use reduce to calculate the total cart value
const totalValue = availableProducts.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);
console.log('Total Cart Value:', totalValue);

// 4. Use slice() and splice() to manipulate the product list
// Example: Remove the second product (index 1) using splice()
const productsCopy = [...products]; // clone original array
const removedProducts = productsCopy.splice(1, 1); // remove one product at index 1
console.log('After splice (removed product):', productsCopy);
console.log('Removed Products:', removedProducts);

// Example: Use slice() to get first two products
const firstTwoProducts = products.slice(0, 2);
console.log('First two products (using slice):', firstTwoProducts);

// 5. Use the spread operator to clone and update the product list
const updatedProducts = [
  ...products,
  { id: 5, name: 'Keyboard', price: 80, quantity: 4 },
];
console.log('Updated Products:', updatedProducts);

// 6. Create a product object with a method to print product details
const productWithMethod = {
  id: 6,
  name: 'Mouse',
  price: 40,
  quantity: 5,
  printDetails() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  },
};
productWithMethod.printDetails();

// 7. Use destructuring to extract product details for display
const { id, name, price, quantity } = productWithMethod;
console.log(`Destructured Product Details -> ID: ${id}, Name: ${name}, Price: $${price}, Quantity: ${quantity}`);
