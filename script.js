const nextTripDate = "1 oct 2022";

const daysEle = document.getElementById('days')
const hoursEle = document.getElementById('hours')
const minsEle = document.getElementById('mins')
const secEle = document.getElementById('sec')

function countDown() {
    const endDate = new Date(nextTripDate);
    const currentDate = new Date();

    const dateDiff = endDate - currentDate;

    const sec = Math.floor(dateDiff / 1000) % 60;
    const mins = Math.floor(dateDiff / 1000 / 60) % 60;
    const hours = Math.floor(dateDiff / 1000 / 3600) % 24;
    const days = Math.floor(dateDiff / 1000 / 3600 / 24);

    daysEle.innerHTML = days;
    hoursEle.innerHTML = hours;
    minsEle.innerHTML = mins;
    secEle.innerHTML = sec;
}

countDown();

setInterval(countDown, 1000)