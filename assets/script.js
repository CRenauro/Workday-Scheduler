var todayDate = moment();
$("#dateToday").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm'));

var presentHour = ["hour9", "hour10", "hour11", "hour12", "hour13", "hour14", "hour15", "hour16", "hour17" ];

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime =parseInt($(this).attr("id").split("hour")[1]);

            if(blockTime < timeNow) {
                $(this).removeClass("future-hour");
                $(this).removeClass("present-hour");
                $(this).addClass("past-hour");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past-hour");
                $(this).removeClass("future-hour");
                $(this).addClass("present-hour");
            }
            else {
                $(this).removeClass("present-hour");
                $(this).removeClass("past-hour");
                $(this).addClass("future-hour");
            }
        })
    }


    timeTracker();

})