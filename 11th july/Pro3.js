// rest operator in javascript
function hello(...args) {
    console.log("Arguments passed:", args);
}
hello(1, 2, 3, 4, 5); // Arguments passed: [1, 2, 3, 4, 5]
hello("a", "b", "c"); // Arguments passed: ["a", "b", "c"]
hello(); // Arguments passed: []