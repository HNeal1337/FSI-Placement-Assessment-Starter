// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Hayden Neal" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

let gbPlusCell = document.querySelector("#qty-gb")

const ccPlusBtn = document.querySelector("#add-cc")

let ccPlusCell = document.querySelector("#qty-cc")

const sugarPlusBtn = document.querySelector('#add-sugar')

let sugarPlusCell = document.querySelector("#qty-sugar")



const gbMinusBtn = document.querySelector('#minus-gb')

let gbMinusCell = document.querySelector("#qty-gb")

const ccMinusBtn = document.querySelector('#minus-cc')

let ccMinusCell = document.querySelector("#qty-cc")

const sugarMinusBtn = document.querySelector('#minus-sugar')

let sugarMinusCell = document.querySelector("#qty-sugar")

const qty_total = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    let gbPlusCount = parseInt(gbPlusCell.textContent);
    gbPlusCount = gbPlusCount + 1;
    gbPlusCell.textContent = gbPlusCount;
    localStorage.setItem('qty-gb',gbPlusCount)
});

ccPlusBtn.addEventListener('click', function(e) {
    let ccPlusCount = parseInt(ccPlusCell.textContent);
    ccPlusCount = ccPlusCount + 1;
    ccPlusCell.textContent = ccPlusCount;
    localStorage.setItem('qty-cc',ccPlusCount)
});

sugarPlusBtn.addEventListener('click', function(e) {
    let sugarPlusCount = parseInt(sugarPlusCell.textContent);
    sugarPlusCount = sugarPlusCount + 1;
    sugarPlusCell.textContent = sugarPlusCount;
    localStorage.setItem('qty-sugar',sugarPlusCount)
});



gbMinusBtn.addEventListener('click', function(e) {
    let gbMinusCount = parseInt(gbMinusCell.textContent);
    gbMinusCount = gbMinusCount - 1;
    gbMinusCell.textContent = gbMinusCount;
    localStorage.setItem('qty-gb',gbMinusCount)
});

ccMinusBtn.addEventListener('click', function(e) {
    let ccMinusCount = parseInt(ccMinusCell.textContent);
    ccMinusCount = ccMinusCount - 1;
    ccMinusCell.textContent = ccMinusCount;
    localStorage.setItem('qty-cc',ccMinusCount)
});

sugarMinusBtn.addEventListener('click', function(e) {
    let sugarMinusCount = parseInt(sugarMinusCell.textContent);
    sugarMinusCount = sugarMinusCount - 1;
    sugarMinusCell.textContent = sugarMinusCount;
    localStorage.setItem('qty-sugar')
});

qty_total = (gbPlusBtn + ccPlusBtn + sugarPlusBtn + gbMinusBtn + ccMinusBtn + sugarMinusBtn);
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons