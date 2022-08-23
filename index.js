const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let fullTime = `${hours}:${minutes}`;

document.querySelector('.system-curtain .time').textContent = fullTime;