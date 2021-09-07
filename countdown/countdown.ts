const countdownDiv:HTMLInputElement = document.querySelector(".countdown");

const msToDHM = (ms:number) => {
    let seconds:number = Math.round(ms / 1000);
    const days: number = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days  * (60 * 60 * 24);
    const hours: number = Math.floor(seconds / (60 * 60));
    seconds -= hours  *  (60 * 60);
    const minutes: number = Math.floor(seconds / 60);
    return {days, hours, minutes};
}

const changeTime = () => {
    const curr_time:number = Date.now();
    const end_date: Date = new Date(2021, 9, 1, 13);
    const time_diff_ms:number = end_date.getTime() - curr_time;
    const {days, hours, minutes} = msToDHM(time_diff_ms);
    countdownDiv.innerText = days + " Days " + hours + " Hours " + minutes + " Minutes"
}

changeTime();

// Not really working for different timezones
setInterval(changeTime, 1000);
