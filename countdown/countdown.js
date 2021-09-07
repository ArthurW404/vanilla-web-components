var countdownDiv = document.querySelector(".countdown");
var msToDHM = function (ms) {
    var seconds = Math.round(ms / 1000);
    var days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * (60 * 60 * 24);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    var minutes = Math.floor(seconds / 60);
    return { days: days, hours: hours, minutes: minutes };
};
var changeTime = function () {
    var curr_time = Date.now();
    var end_date = new Date(2021, 9, 1, 13);
    var time_diff_ms = end_date.getTime() - curr_time;
    var _a = msToDHM(time_diff_ms), days = _a.days, hours = _a.hours, minutes = _a.minutes;
    countdownDiv.innerText = days + " Days " + hours + " Hours " + minutes + " Minutes";
};
changeTime();
// Not really working for different timezones
setInterval(changeTime, 1000);
