var currentDayEL = $('#currentDay');
var hour9EL = $('#hour-9');
var hour10EL = $('#hour-10');
var hour11EL = $('#hour-11');
var hour12EL = $('#hour-12');
var hour1EL = $('#hour-1');
var hour2EL = $('#hour-2');
var hour3EL = $('#hour-3');
var hour4EL = $('#hour-4');
var hour5EL = $('#hour-5');
var currentHour;


// Displays the current date in the currentDay component
function displayDay() {
  var today = dayjs().format('dddd, MMMM D YYYY');
  currentDayEL.text(today);
};

currentHour = dayjs().format('h a');



// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// -----------------------------------------------------------------------------
// Dynamically changes the background color of any given row depending on if that hour has passed or not
function setColors() {
  var divs = document.getElementsByClassName('description'); //No idea if this is right
  for (var i = 0; i < divs.length; i += 1) {
    // Need to somehow get the id="hour-9" for instance, in the first row, to check the value
    // and compare it to the currentHour to see what color it should be set to.
  };
};


// Saves data to localStorage
function saveSchedule() {

};

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
// -----------------------------------------------------------------------------
// Retrieves data from localStorage and renders it to the view
function displaySchedule() {

};

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// -----------------------------------------------------------------------------
// Event listener to save data to localStorage on click of save button (per row)
$(".saveBtn").on("click", function(event) {
  event.preventDefault();

  saveSchedule();
  displaySchedule();
})




// Immediately call the displayDay function to have the current date 
displayDay();
setColors();
displaySchedule();
