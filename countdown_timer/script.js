var $ = document.querySelector.bind(document);

var daysEl = $('#days');
var hoursEl = $('#hours');
var minutesEl = $('#minutes');
var secondsEl = $('#seconds');

var newYear = '1 Jan 2022'

function Countdown() {     // Viết ra hàm để tính thời gian và khởi chạy

    var newyearDate = new Date(newYear);
    var currentDate = new Date();

    var totalseconds = (newyearDate - currentDate) / 1000;    // Vì tính theo mini s lên phải chia 1000

    var days = Math.floor(totalseconds / 3600 / 24);     // Làm tròn dưới.
    var hours = Math.floor((totalseconds / 3600) % 24);     // Lấy phần dư của phép toán
    var minutes = Math.floor((totalseconds / 60) % 24);
    var seconds = Math.floor(totalseconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

Countdown();

setInterval(Countdown, 1000);