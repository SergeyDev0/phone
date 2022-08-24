const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();

if( hours < 10 ){
    hours = '0' + hours;
}

if( minutes < 10 ){
    minutes += '0' + minutes;
}

let fullTime = `${hours}:${minutes}`;

document.querySelector('.system-curtain .time').textContent = fullTime;