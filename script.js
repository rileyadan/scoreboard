const startingMinutes = 12;
let time = startingMinutes * 60;
let isPaused = false;
const countdownEL = document.getElementById("countdown");
let myInterval = setInterval(updateCountdown, 1000);

function updateCountdown(){
    if(time > -1){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownEL.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}
function startCountdown(){
    if(isPaused == true){
        myInterval = setInterval(updateCountdown, 1000);
    }
    isPaused = false;
}
function pauseCountdown(){
    clearInterval(myInterval);
    isPaused = true;
}
function resetCountdown(){
    time = startingMinutes * 60;
    clearInterval(myInterval);
    isPaused = true;
    updateCountdown();
}