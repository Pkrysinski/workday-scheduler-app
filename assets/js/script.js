var currentDayEL = $('#currentDay');
var plannerEL = $('#planner');
// START - Variables for static rows (don't want!)

// END -  Variables for static rows (don't want!)
// START - Variable for dynamic rows
var workHours = ["9a","10a","11a","12p","1p","2p","3p","4p","5p"];
// END - Variable for dynamic rows

// Displays the current date in the currentDay component
function displayDay() {
  var today = dayjs().format('dddd, MMMM D YYYY');
  currentDayEL.text(today);
};

var currentHour = dayjs().hour();
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// -----------------------------------------------------------------------------
// Dynamically build the rows based on number of workHours there are, and change the background color of any given row depending on if that hour has passed or not.
function saveToStorage(key, value){
  console.log(key, value)
  localStorage.setItem(key,value)
}

function renderStorage(key){
  return JSON.parse(localStorage.getItem(key)) || ''
}

function buildRows() {
  for (var i = 0; i < workHours.length; i += 1) {
    var hourRow = workHours[i];

    // Create row elements
    var divRowEL = document.createElement('div');
    var divHourEL = document.createElement('div');
    divHourEL.textContent = hourRow;
    var textAreaEL = document.createElement('textarea');
    var saveButtonEL = document.createElement('button');

    //divRowEL.addClass('row time-block');
    divRowEL.classList.add("row", "time-block");
    divHourEL.classList.add("col-2", "col-md-1", "hour", "text-center", "py-3");
    textAreaEL.classList.add("col-8", "col-md-10", "description");
    saveButtonEL.classList.add("btn", "saveBtn", "col-2", "col-md-1");
    saveButtonEL.click(function(event){
      event.preventDefault()
      // console.log(event.target.previousSibling.value)
      saveToStorage(hourRow,event.target.previousSibling.value)
    })

    // Append a class depending on time of day vs. row hour displayed
    if(i+9 < currentHour){
      divRowEL.classList.add('past');
    }
    else if (i+9 == currentHour){
      divRowEL.classList.add('present');
    } else {
      divRowEL.classList.add('future');
    };

    divRowEL.append(divHourEL,textAreaEL,saveButtonEL);
    plannerEL.append(divRowEL);

  };

  //This is being used to get the current hour, and compare it to the workHours rows to determine if they should be grey, red, or green.

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
// $(".saveBtn").on("click", function(event) {
//   event.preventDefault();

//   saveSchedule();
//   displaySchedule();
// });


displayDay();   // Display the current date in the header
buildRows();    // Dynamically build the rows based on workHours variable, and set colors
displaySchedule();  // Fetch the schedule from local storage and display to the UI