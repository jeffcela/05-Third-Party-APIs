// This is how the tasks get saved to the users local storage, it is done by each seperate hour.
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

// this established the current date and time to allow the timeTracker function to know when to execute certain portions of the function
$(document).ready(function () {
    $("#clock").text(moment().format("MMMM Do YYYY, h:mm a"));
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
// This is the function that runs when the hour changes
    function timeTracker() {
        var currentHour = moment().hour();
        $(".time-block").each(function () {
            var taskHour = parseInt($(this).attr("id").split("hr")[1]);
            console.log( taskHour, currentHour)
// This adds the class past (grey) and removes future(green) and present(red) so that the user knows the time block is past due
            if (taskHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
// This adds the class present (red) and removes past(grey) and future(green) so that the user knows the time block is due in the current hour         
            else if (taskHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
// This adds the class future (green) and removes past(grey) and present(red) so that the user knows the time block is due in the future            
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
// this execute the color changing function
    timeTracker();
})

