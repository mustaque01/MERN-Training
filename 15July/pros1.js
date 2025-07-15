getData(function(data) {

    processData(data, function(processedData) {

        saveData(processedData, function(savedData) {

            sendConfirmation(savedData, function(response) {

                console.log("Operation completed: " + response);

            });

        });

    });

});

// What is callback hell?
// Ans. Callback hell occurs in JavaScript when numerous nested callbacks create a complex, deeply indented code structure, commonly known as the “pyramid of doom.” This makes the code hard to read, debug, and maintain, ultimately resulting in reduced code quality and challenges with scalability.