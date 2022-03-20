const timer = document.querySelector('.numbers');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let now = new Date();
const dateOffsetMinutes = now.getTimezoneOffset();
const dayInMilliseconds = 1000*60*60*24;
const hourInMilliseconds = 1000*60*60;
const minuteInMilliseconds = 1000*60;
const secondInMilliseconds = 1000;
const newYear = new Date('2023');



getCompteur();

function getCompteur() {
    let presentDate = Date.now();
    let remainingTime = newYear - presentDate + dateOffsetMinutes*minuteInMilliseconds;
    let daysLeft = Math.floor(remainingTime/dayInMilliseconds);
    let remainingTimeWd = remainingTime - daysLeft*dayInMilliseconds;
    let hoursLeft = Math.floor(remainingTimeWd/hourInMilliseconds);
    let remainingTimeWh = remainingTimeWd - hoursLeft*hourInMilliseconds;
    let minutesLeft = Math.floor(remainingTimeWh/minuteInMilliseconds); 
    let remainingTimeWm = remainingTimeWh - minutesLeft*minuteInMilliseconds;
    let secondsLeft = Math.floor(remainingTimeWm/secondInMilliseconds);

    days.textContent = daysLeft;
    hours.textContent = hoursLeft;
    minutes.textContent = minutesLeft;
    seconds.textContent = secondsLeft;
}
setInterval(getCompteur,1000);


