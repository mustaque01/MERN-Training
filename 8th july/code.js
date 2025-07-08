function init(){
    rollbox = document.getElementById("rollNo");
    namebox = document.getElementById("name");  
    branchbox = document.getElementById("branchSelect");
    javaMarks = document.getElementById("javaMarks");
    pythonMarks = document.getElementById("pythonMarks");
    jsMarks = document.getElementById("jsMarks");
    addBtn = document.getElementById("addBtn");
}

function add (){
    var roll = rollbox.value;
    var name = namebox.value;
    var branch = branchbox.value;
    var java = javaMarks.value;
    var python = pythonMarks.value;
    var js = jsMarks.value;
    var total = parseInt(java) + parseInt(python) + parseInt(js);
    var percentage = (total / 300) * 100;
    console.log("Roll No: " + roll);
    console.log("Name: " + name);       
    console.log("Branch: " + branch);
    console.log("Java Marks: " + java);
    console.log("Python Marks: " + python); 
    console.log("JavaScript Marks: " + js);
    console.log("Total Marks: " + total);
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    

    // Perform validation and add the student record    
}