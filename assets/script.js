$(document).ready(funtion() {

//check for button clicks inside an on click
$(".saveBtn").on)("click", function() {
//grab values for time and text
var value = $(this).siblings(".task").val();
var time = $(this).parent().attr("id")
//save to local storage
localStorage.setItem(time, value)
})

//write a function to update the hours in the time blocks
//get current time using moment
var currentDay = moment().hours();

//then you need to find a way to loop all your hour blocks get from every element the hour and compare it with the currentHour

function currentHour {
    if (now == hours).document.querySelector("col-1 hour")
    change col-1 hour to color: #green;
}   else change col-1 hour to color: #red;


//check to see if we have moved past the current time
//if
//addClass
//addClass ("past")

//check to see if current time
//else if
//removeClass
//addClass

//check to see if time is future
//else
//remove class
//remove class
//add class
}

//load any saved data from localStorage

$("#hour-9 .task").val(localStorage.getItem("hour-9"));

//display current day on page (use moment)

TODO:  //this doesn't work

// var today = moment();
$("currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

// var today = moment();
// $("#1a").text(today.format("MMM Do, YYYY"));