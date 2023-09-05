let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let sec = 0;
let counter = 0;

let timer = false;

startBtn.addEventListener('click', () => {
    timer = true;
    stopWatch();

});
stopBtn.addEventListener('click', () => {
    timer = false;
});
resetBtn.addEventListener('click', function () {
    hour = 0;
    minute = 0;
    sec = 0;
    counter = 0;
    document.getElementById('hr').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '01';

})

function stopWatch() {
    if (timer) {
        counter++;
        if (counter == 100) {
            sec++;
            counter = 0;
        }
        if (sec == 60) {
            minute++;
            sec = 0;
            counter = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0
            counter = 0;
        }





    }
    let hrString = hour;
    let minString = minute;
    let secString = sec;
    if (hour < 10) {
        hrString = '0' + hour;

    }
    if (minute < 10) {
        minString = '0' + minute;
    }
    if (sec < 10) {
        secString = '0' + sec;
    }
    document.getElementById('hr').innerText = hrString;
    document.getElementById('min').innerText = minString;
    document.getElementById('sec').innerText = secString;
    setTimeout(stopWatch, 10);


}