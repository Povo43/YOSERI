/*タイマー*/
const START = document.getElementById('timer-start');
const STOP = document.getElementById('timer-stop');
const RESET = document.getElementById('timer-reset');
const SECONDS = document.querySelector('input[name="timer-s"]');
const MINITS = document.querySelector('input[name="timer-m"]');
const HOURS = document.querySelector('input[name="timer-h"]');

START.addEventListener('click', () => {
    //クリックイベント
    alert("スタートしました");
    HOURS.value = "2";
    MINITS.value = "2";
    SECONDS.value = "2";
    timer_start();
});

STOP.addEventListener('click', () => {
    alert("ストップしました")
});

RESET.addEventListener('click', () => {
    alert("リセットしました")
});

function timer_display(){

}

function timer_start(){
    /*呼び出せてる*/
    alert("3")
}