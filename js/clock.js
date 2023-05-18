window.addEventListener("DOMContentLoaded", paintClock);

function paintClock() {
    const date = new Date();
    const container = document.querySelector(".clock-container");
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds"); 
    const getHours = String(date.getHours()).padStart(2,"0");
    const getMinutes = String(date.getMinutes()).padStart(2,"0");
    const getSeconds = String(date.getSeconds()).padStart(2,"0");
    container.innerText = `${getHours}:${getMinutes}:${getSeconds}`;
}
workClock();
function workClock() {
    setInterval(paintClock, 1000);
}