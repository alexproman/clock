
const secondsEl = document.querySelector('.seconds');
const minutesEl = document.querySelector('.minutes');
const hoursEl = document.querySelector('.hours');
const clockNum = document.querySelector('.clock-num')
const minuteNum = document.querySelector('.minute-num')
const secondNum = document.querySelector('.second-num')





function currentClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let hoursDegree = (hours / 12) * 360;
    let minutesDegree = (minutes / 60) * 360;
    let secondsDegree = (seconds / 60) * 360;

    hoursEl.style.transform = `rotate(${hoursDegree}deg)`;
    minutesEl.style.transform = `rotate(${minutesDegree}deg)`;
    secondsEl.style.transform = `rotate(${secondsDegree}deg)`;

    seconds < 10 ? secondNum.innerHTML = `0${seconds}` : secondNum.innerHTML = seconds;
    minutes < 10 ? minuteNum.innerHTML = `0${minutes}` : minuteNum.innerHTML = minutes;
    hours < 10 ? clockNum.innerHTML = `0${hours}` : clockNum.innerHTML = hours;
}
setInterval(currentClock, 1000)
