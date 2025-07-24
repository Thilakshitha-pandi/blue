// Global task list (Global Scope)
let tasks = [];

// 1. Function to add a single task and then call a callback
const addTask = (task, callback) => {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
    callback(); // Call the callback after task is added
};

// 2. Callback function that prints all current tasks
const printTasks = function() {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};

// 3 & 4. Function using rest parameters to add multiple tasks at once
const addMultipleTasks = (...newTasks) => {
    newTasks.forEach(task => tasks.push(task));
    console.log(`${newTasks.length} tasks added.`);
};

// 5. Variable scope illustration
function scopeDemo() {
    let innerMessage = "I'm inside the function"; // Function scope
    console.log(innerMessage);
}

let outerMessage = "I'm outside the function"; // Global scope

// ------ DEMO ------

// Add a single task with callback
addTask("Buy groceries", printTasks);

// Add multiple tasks
addMultipleTasks("Clean the house", "Read a book", "Pay bills");

// Print again to show updated list
printTasks();

// Demonstrate scope
scopeDemo();
console.log(outerMessage);
// Uncommenting the next line will throw a ReferenceError, because innerMessage is not accessible here
// console.log(innerMessage);
