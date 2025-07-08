function init(){
    rollbox = document.getElementById("rollNo");
    namebox = document.getElementById("name");  
    branchbox = document.getElementById("branchSelect");
    javaMarks = document.getElementById("javaMarks");
    pythonMarks = document.getElementById("pythonMarks");
    jsMarks = document.getElementById("jsMarks");
    addBtn = document.getElementById("addBtn");

    

}
function add (ev){
    ev.preventDefault(); // Prevent form submission
    var roll = rollbox.value;
    var name = namebox.value;
    var branch = branchbox.value;
    var java = javaMarks.value;
    var python = pythonMarks.value;
    var js = jsMarks.value;
    var total = parseInt(java) +    parseInt(python) + parseInt(js);
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
    var td1 = document.createElement("td");
    td1.innerText = name;
    var td2 = document.createElement("td");     
    td2.innerText = branch;
    var td3 = document.createElement("td");
    td3.innerText  = roll;
    var td4 = document.createElement("td");
    td4.innerText = java;
    var td5 = document.createElement("td");
    td5.innerText = python;
    var td6 = document.createElement("td");
    td6.innerText = js;
    var td7 = document.createElement("td");
    td7.innerText = total;
    var td8 = document.createElement("td");
    td8.innerText = percentage.toFixed(2) + "%";
    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    document.querySelector("tbody").appendChild(tr);
    ev.target.reset(); // Reset the form fields
}