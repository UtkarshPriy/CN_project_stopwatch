// for the reviewer the reset button will set timer to zero and not restart until start button is click because same is defined in the document

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let hour = 0;
let minute = 0;
let sec = 0;
let counter = 0;

let timer = false;
let timeoutId = null // too store timeout id

startBtn.addEventListener('click', function () { // to initialize the timer
    timer = true;

    clearTimeout(timeoutId); // too clear previous timeout inorder to avoid speed-up
    stopWatch();

});
stopBtn.addEventListener('click', function () { // to pause the timer
    timer = false;
    clearTimeout(timeoutId); // too clear previous timeout inorder to avoid speed-up
});
resetBtn.addEventListener('click', function () { // to reset the timer
    hour = 0;
    minute = 0;
    sec = 0;
    counter = 0;
    document.getElementById('hr').innerHTML = '00:';
    document.getElementById('min').innerHTML = '00:';
    document.getElementById('sec').innerHTML = '00';
    clearTimeout(timeoutId); // too clear previous timeout inorder to avoid speed-up

})

function stopWatch() {
    clearTimeout(timeoutId);
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
    let hrString = hour + ':';
    let minString = minute + ":"; // added : here to avoid ui breakage
    let secString = sec;
    if (hour < 10) {
        hrString = '0' + hour + ':';

    }
    if (minute < 10) {
        minString = '0' + minute + ':';
    }
    if (sec < 10) {
        secString = '0' + sec;
    }
    document.getElementById('hr').innerText = hrString;
    document.getElementById('min').innerText = minString;
    document.getElementById('sec').innerText = secString;
    timeoutId = setTimeout(stopWatch, 10);



}