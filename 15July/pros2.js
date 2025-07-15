// pros1.js
function testVar() {
    if (true) {
        var x = 10; // This variable is “Function” and that is its “Lexical” scope
    }
    console.log(x); // 10 (accessible outside the block)    
}
testVar();
getData(function(data) {

    processData(data, function(processedData) {

        saveData(processedData, function(savedData) {

            sendConfirmation(savedData, function(response) {

                console.log("Operation completed: " + response);

            });

        });

    });

});


// 34. What do you understand by Lexical Scoping?
// Lexical Scoping in JavaScript means a function can use values declared in its parent’s scope but its parent cannot do the same. Lexical Scope implies the block of code in which a function or variable is declared.

// Variables declared using the ‘var’ keyword are function-scoped which means their lexical scope lies within the function they are declared in.