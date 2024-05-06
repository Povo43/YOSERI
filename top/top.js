/*タイマー*/
const START = document.getElementById('timer-start');
const STOP = document.getElementById('timer-stop');
const RESET = document.getElementById('timer-reset');
const HOURS = document.querySelector('input[name="timer-s"]');

START.addEventListener('click', () => {
    //クリックイベント
    alert("スタートしました")
    HOURS.value = "2";
});

STOP.addEventListener('click', () => {
    alert("ストップしました")
});

RESET.addEventListener('click', () => {
    alert("リセットしました")
});