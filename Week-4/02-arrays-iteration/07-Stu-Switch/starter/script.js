// Write your code here

var dayStr = "";

var dayNo = prompt("What day of the week?");

if (dayNo < 1 || dayNo > 7) {
    alert("Invalid value.");
}

else {
    switch (parseInt(dayNo)) {
        case 1:
            dayStr = "Monday";
            break;
        case 2:
            dayStr = "Tuesday";
            break;
        case 3:
            dayStr = "Wednesday";
            break;
        case 4:
            dayStr = "Thursday";
            break;
        case 5:
            dayStr = "Friday";
            break;
        case 6:
            dayStr = "Saturday";
            break;
        case 7:
            dayStr = "Sunday";
            break;
    }

    alert(dayStr);

}



