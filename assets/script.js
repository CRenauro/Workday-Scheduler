$(document).ready(funtion());{

//check for button clicks inside an on click
$(".saveBtn").on("click", function() {
//grab values for time and text
var value = $(this).siblings(".task").val();
var time = $(this).parent().attr("id")
//save to local storage
localStorage.setItem(time, value)
})

//write a function to update the hours in the time blocks
//get current time using moment
var currentTime = moment().hours();
var workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

$(document).ready(function(){
    if(!localStorage.getItem('workDay')) {
        updateCalendarTasks(workDay);
    } else {
        updateCalendarTasks(JSON.parse(localStorage.getItem('workday')));
    }
})

//then you need to find a way to loop all your hour blocks get from every element the hour and compare it with the currentHour

if (currentTime < presentHour) {
    $(textEntry).addClass("past-hour");
} else if (currentTime > presentHour) {
    $(textEntry).addClass("future-hour");
} else {
    $(textEntry).addClass("present-hour");
}


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

var today = moment();
console.log("today: ", today);
console.log("moment().format('dddd'): ", moment().format('dddd'));
console.log(moment);
$("#dateToday").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

























