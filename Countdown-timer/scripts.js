let countdown;
let isRunning = false;
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let time = 300; // Set countdown time in seconds (e.g., 5 minutes = 300 seconds)
updateDisplay(time);

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay(time);
            } else {
                clearInterval(countdown);
                isRunning = false;
            }
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(countdown);
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    isRunning = false;
    time = 300; // Reset to initial time
    updateDisplay(time);
});

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}
