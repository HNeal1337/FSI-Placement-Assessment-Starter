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

let qtyTotal = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    let gb = parseInt(gbPlusCell.textContent);
    gb = gb + 1;
    gbPlusCell.textContent = gb;
    localStorage.setItem('qty-gb',gb)
    let sum = gb + cc + sugar
    qtyTotal.textContent=sum
});

ccPlusBtn.addEventListener('click', function(e) {
    let cc = parseInt(ccPlusCell.textContent);
    cc = cc + 1;
    ccPlusCell.textContent = cc;
    localStorage.setItem('qty-cc',cc)
    let sum = gb+cc+sugar
    qtyTotal.textContent=sum
});

sugarPlusBtn.addEventListener('click', function(e) {
    let sugar = parseInt(sugarPlusCell.textContent);
    sugar = sugar + 1;
    sugarPlusCell.textContent = sugar;
    localStorage.setItem('qty-sugar',sugar)
    let sum = gb+cc+sugar
    qtyTotal.textContent=sum
});



gbMinusBtn.addEventListener('click', function(e) {
    let gb = parseInt(gbMinusCell.textContent);
    gb = gb - 1;
    gbMinusCell.textContent = gb;
    localStorage.setItem('qty-gb',gb)
    let sum = gb+cc+sugar
    qtyTotal.textContent=sum
});

ccMinusBtn.addEventListener('click', function(e) {
    let cc = parseInt(ccMinusCell.textContent);
    cc = cc - 1;
    ccMinusCell.textContent = cc;
    localStorage.setItem('qty-cc',cc)
    let sum = gb+cc+sugar
    qtyTotal.textContent=sum
});

sugarMinusBtn.addEventListener('click', function(e) {
    let sugar = parseInt(sugarMinusCell.textContent);
    sugar = sugar - 1;
    sugarMinusCell.textContent = sugar;
    localStorage.setItem('qty-sugar',sugar)
    let sum = (gb + cc + sugar)
    qtyTotal.textContent=sum
});
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons