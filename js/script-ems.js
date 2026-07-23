// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm')
const table = document.getElementById('employees')
const tableBody = document.getElementById("empTable")

// To begin, set FOCUS to the first text box
const firstTxtBx = document.querySelector('input[type="text"]');
if (firstTxtBx) {
  firstTxtBx.focus();
  // Force cursor to the very BEGINNING of the text
  firstTxtBx.setSelectionRange(0, 0);  
}

// CREATE AN ARRAY OF EMPLOYEES
const employees = [
    { id: 10000001, name: "Joe Smith", ext: 2120, email: "jsmith@xmail.com", dept: "Sales"},
    { id: 10000002, name: "Tammy Cyr", ext: 2121, email: "tcyr@xmail.com", dept: "Administrative"},
    { id: 10000003, name: "Wayne Thomson", ext: 2122, email: "wthomson@xmail.com", dept: "Engineering"},
    { id: 10000004, name: "Diane Jones", ext: 2123, email: "djones@xmail.com", dept: "Quality Assurance" },
    { id: 10000005, name: "Sue Liang ", ext: 2124, email: "sliang@xmail.com", dept: "Marketing"}
];
let list
let storage
let storageArry = []
function checkStorage() {
    if (storageArry.length === 0) {
        // GET TASKS FROM STORAGE OR EMPTY STRING IF STORAGE IS ALSO EMPTY
        storage = localStorage.getItem('storageArry') || ''
        // IF NOT EMPTY, CONVERT STRING TO ARRAY AND STORE IN TASKS VARIABLE
        if (storage.length > 0) {
            // storageArry = storage.split('|') // WITHOUT JSON.PARSE
            storageArry = JSON.parse(localStorage.getItem('storageArry'))
        }
    }
    // IF THERE ARE ITEMS IN THE Storage Array
    // SORT AND CREATE TASKS STRING
    // THEN DISPLAY STRING WITHIN TEXTAREA
    //if (storageArry.length > 0) {
     //   list = storageArry.join('\n') // APPEND LINE BREAK

        // DISPLAY TASKS STRING
     //   $('tableBody').value = list
    //}
}
//Function to save to local storage
function saveEmployees() {
   localStorage.setItem('employees', JSON.stringify(employees))
}

// Function to load employees from local storage
function loadEmployees() {
    // CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
    // Check if the object exists in storage before attempting extraction
   if (localStorage.getItem('employees') !== null) {
       employees = JSON.parse(localStorage.getItem('employees'));
    }
    buildGrid(); // Build grid when page loads/data is extracted
 }
// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // Grid rendering logic goes here
    saveEmployees(); // Stored when the grid is built
}

function keepThead() {
//const tableBody = document.getElementById("empTable");
// Loop backwards and delete every row except the first one (index 0)
for (let i = tableBody.rows.length - 1; i > 0; i--) {
    tableBody.deleteRow(i);
}
}

function delEmployee (index) {
    empTable.addEventListener('click', (e) => {
    employees.splice(index, 1); // Removes 1 item at the specified index
    displayEmployees(); 
 });
}//func delEmployee

function displayEmployees() {
keepThead()
const rowHtml = employees.map((emp, index) => `
    <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.ext}</td>
        <td>${emp.email}</td>
        <td>${emp.dept}</td>
        <td>
          <button onclick="delEmployee(${index})">X</button>
        </td>
    </tr>
`).join('\n')

// Append the row to the table body
tableBody.innerHTML += rowHtml
} //function displayEmployees

function addNewEmployee () {
// ADD EMPLOYEE function
//listen for form submission
    form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
   
    // GET THE VALUES FROM THE TEXT BOXES
    const empName = document.getElementById('name').value
    const empId = document.getElementById('id').value
    const empDept = document.getElementById('department').value
    const empExt = document.getElementById('extension').value
    const empEmail = document.getElementById('email').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    // Create a new row (<tr>)
    const newRow = document.createElement('tr');

    // Create a new array from the input data
    const newEmployee = [
        { id: empId, name: empName, ext: empExt, email: empEmail, dept: empDept}
    ];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    // Push items into the existing array
    employees.push(...newEmployee)

    //reset table body
    //tableBody.innerHTML = ""
    keepThead()
    // display on page load
    displayEmployees()

// RESET THE FORM
form.reset()

// SET FOCUS BACK TO THE ID TEXT BOX
firstTxtBx.focus();
    }); //form.addEventListener
}  //func addNewEmployee


//MAIN

displayEmployees()
addNewEmployee()
