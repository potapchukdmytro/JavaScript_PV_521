// setTimeout - виконує функцію після вказаної затримки

function printMessage(message) {
    console.log(message);
}

setTimeout(printMessage, 5000, "Hello my friend");

function clickBtn() {
    const h1 = document.getElementById("message");
    console.log("start timeout");
    // setTimeout повертає id функції setTimeout щоб можна було потім її зупинити
    const timeoutId = setTimeout(
        (message, number) => {
            h1.innerText = message;
        },
        5000,
        "Timeout 5 sec",
    );

    const stopBtn = document.getElementById("stopMessage");
    stopBtn.addEventListener("click", () => {
        clearTimeout(timeoutId);
        console.log("stop timeout");
    });

    // clearTimeout - зупинити виконання timeoutId
    // clearTimeout(timeoutId);
}

// setInteval - нескінченно виконує функцію із вказаним інтервалом
// let i = 1;
// setInterval(() => {
//     console.log(i++);
// }, 2000);

function setCurrentTime() {
    const h1 = document.getElementById("time");
    const dateTime = new Date();
    const rawTime = [dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds(),];
    const resArr = rawTime.map((t) => (t < 10 ? "0" + t.toString() : t.toString()));
    const time = resArr.join(":");

    // "20:10:00".split(":") = ["20", "10", "00"]
    // ["20", "10","00"].join("/") = "20/10/00"

    // const [h, m, s] = rawTime.map((t) => t < 10 ? `0${t}` : t.toString());
    // const time = `${h}:${m}:${s}`;

    h1.innerText = time;
}

let realTimeStarted = false;

function startRealTime() {
    const btnStart = document.getElementById("startRealTime");
    if(!realTimeStarted) {
        // start
        btnStart.disabled = true;
        realTimeStarted = true;
        console.log("start interval");
        const id = setInterval(setCurrentTime, 1000);
        const stopBtn = document.getElementById("stopRealTime");
        stopBtn.disabled = false;

        // stop
        stopBtn.addEventListener("click", () => {
            btnStart.disabled = false;
            console.log("stop interval"); 
            realTimeStarted = false;
            stopBtn.disabled = true;
            clearInterval(id);
        });
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    startRealTime();
});

// function myMap(func) {
//     const dateTime = new Date();
//     const rawTime = [
//         dateTime.getHours(),
//         dateTime.getMinutes(),
//         dateTime.getSeconds(),
//     ];
//     const newArr = [];

//     for (const t of rawTime) {
//         const res = func(t);
//         newArr.push(res);
//     }

//     return newArr;
// }

// map(addZero);

// function addZero(t) {
//     if (t < 10) {
//         return "0" + t.toString();
//     } else {
//         return t.toString();
//     }

//     // return t < 10 ? `0${t}` : t.toString();
// }

// const arr = [1,2,3,4,5,6,7];
// const arrStr = arr.map((i) => i.toString());
// const arrSqrt = arr.map((i) => i * i)