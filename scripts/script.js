// Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = '[not intialized]';
var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = '[not initialized]';

// Function to initiate vars into intended values
function initiateVars() {
  greeting = 'Howdy ';
  name = 'Molly';
  message = ', please check your order:';
  welcome = greeting + name + message;
  // call setTextContentById so that the payButton works
  setTextContentById('greeting', welcome);
  sign = 'Montague House';
  setTextContentById('userSign', sign);
  tiles = sign.length;
  setTextContentById('tiles', tiles);
  subTotal = tiles * 5;
  setTextContentById('subTotal', '$' + subTotal);
  shipping = 7;
  setTextContentById('shipping', '$' + shipping);
  grandTotal = subTotal + shipping;
  setTextContentById('grandTotal', '$' + grandTotal);
}

// Function to set vars back to default values
function setDefaults() {
  greeting = '[not initialized]';
  name = '[not initialized]';
  message = '[not initialized]';
  welcome = greeting + name + message;
  // call setTextContentById so that the resetButton works
  setTextContentById('greeting', welcome);
  sign = '[not intialized]';
  setTextContentById('userSign', sign);
  tiles = '[not initialized]';
  setTextContentById('tiles', tiles);
  subTotal = '[not initialized]';
  setTextContentById('subTotal', subTotal);
  shipping = '[not initialized]';
  setTextContentById('shipping', shipping);
  grandTotal = '[not initialized]';
  setTextContentById('grandTotal', grandTotal);
  
}

// Event listener for the reset button
var elClose = document.getElementById('resetButton');
elClose.addEventListener('click', setDefaults);

// Event listener for the pay button
var elClose = document.getElementById('payButton');
elClose.addEventListener('click', initiateVars);

// Function for setting text content on the HTML side of things
function setTextContentById(getId, setText) {
  console.log("flag1" + greeting);
  var el = document.getElementById(getId);
  el.textContent = setText;
}

// IIFE
(function() {
initiateVars();
// Get the element that has an id of greeting
// Replace the content of that element with the personalized welcome message
setTextContentById('greeting', welcome);
// Get the element that has an id of userSign then update its contents
setTextContentById('userSign', sign);
// Get the element that has an id of tiles then update its contents
setTextContentById('tiles', tiles);
// Get the element that has an id of subTotal then update its contents
setTextContentById('subTotal', '$' + subTotal);
// Get the element that has an id of shipping then update its contents
setTextContentById('shipping', '$' + shipping);
// Get the element that has an id of grandTotal then update its contents
setTextContentById('grandTotal', '$' + grandTotal);
// Note: textContent does not work in IE8 or earlier - see explanation on website

}());