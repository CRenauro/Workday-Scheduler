//$(document).ready(function(){

//check for button clicks inside an on click
$(".saveBtn").on("click", function(){
    //grab values for time and text
    var value = $(this).siblings(".textInput").val()
    var time = $(this).parent().text()
    console.log(value, time)
    //save to local storage
    localStorage.setItem(time, value)
}) 

var container = $(".container")
container.children().each(function() {
var element = $(this).prop('outerHTML');
$("col-1 hour").append(element);
})


var today = moment();
$("#dateToday").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm'));

var presentHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17" ];


// //then you need to find a way to loop all your hour blocks get from every element the hour and compare it with the currentHour
// var presentHour = moment().hours();


if (presentHour < today) {
    $(textarea).addClass("past-hour");
} else if (presentHour > moment) {
    $(textarea).addClass("future-hour");
} else {
    $(textarea).addClass("present-hour");
}

// //check to see if we have moved past the current time
// //if
// //addClass
// //addClass ("past")
// if (pastTime > currentTime) {
//     $(textEntry).addClass ("past-hour");
// }


// //check to see if current time
// // for loop
// //else if
// //removeClass
// //addClass
// if (currentTime == currentTime) {
//     $(textEntry).removeClass ("past-hour")
// } else {
//     $(textEntry).addClass ("present-hour");

// //check to see if time is future
// //else
// //remove class
// //remove class
// //add class
// if (currentTime < futureHour) {
//     $(textEntry).removeClass ("past-hour") 
// }   else if {
//     $(textEntry).removeClass ("present-hour")
// }   else {
//     $(textEntry).addClass ("future-hour")
// };   


// //load any saved data from localStorage

// //});