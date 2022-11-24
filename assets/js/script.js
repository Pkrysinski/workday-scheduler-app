var currentDayEL = $('#currentDay');
var plannerEL = $('#planner');
var workHours = ["9a","10a","11a","12p","1p","2p","3p","4p","5p"];
// END - Variable for dynamic rows

// Displays the current date in the currentDay component
function displayDay() {
  var today = dayjs().format('dddd, MMMM D YYYY');
  currentDayEL.text(today);
};

var currentHour = dayjs().hour();

function saveToStorage(key,value){
  localStorage.setItem(key,value)
};

function renderStorage(){
  for (var i = 0; i < localStorage.length; i++){
    var storageValue = localStorage.getItem(localStorage.key(i));
    var storageKey = localStorage.key(i);
    // This is where we need to get the textarea and set it to the value stored in localStorage
    console.log(storageKey);
    console.log(storageValue);

    // TODO: Need to find the associated textArea element so we can assign it's textArea.textContent = storageValue.


}};

function buildRows() {
  for (var i = 0; i < workHours.length; i += 1) {
    var hourRow = workHours[i];

    // Create row elements
    var divRowEL = document.createElement('div');
    var divHourEL = document.createElement('div');
    divHourEL.textContent = hourRow;
    var textAreaEL = document.createElement('textarea');
    var saveButtonEL = document.createElement('button');
    divRowEL.classList.add("row", "time-block");
    divHourEL.classList.add("col-2", "col-md-1", "hour", "text-center", "py-3");
    textAreaEL.classList.add("col-8", "col-md-10", "description");
    saveButtonEL.classList.add("btn", "saveBtn", "col-2", "col-md-1");
    saveButtonEL.setAttribute("id", hourRow);
    saveButtonEL.addEventListener("click", function(event) {
      event.preventDefault();
      saveToStorage(event.target.getAttribute('id'),event.target.previousSibling.value); 
      renderStorage();
    });

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

};


displayDay();   // Display the current date in the header
buildRows();    // Dynamically build the rows based on workHours variable, and set colors
renderStorage();
