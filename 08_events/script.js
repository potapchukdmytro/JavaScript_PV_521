// DOMContentLoaded - виконується тоді коли HTML повністю завантажився
document.addEventListener("DOMContentLoaded", () => {
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    btn2.onclick = clickButton;
    btn3.addEventListener("click", clickButton);

    const windowSize = document.getElementById("windowSize");
    windowSize.innerText = window.outerWidth + "x" + window.outerHeight;
});

function clickButton(event) {
    // event - об'єкт в якому записана інформація про подію
    console.log(event);
    // event.target - html елемент з який відбулася подія
    event.target.style.backgroundColor = "lightgreen";
}

function mouseEnter(event) {
    const div = event.target;
    div.style.backgroundColor = "#2e7453";
    div.style.transform = "scale(1.2)";
}

function mouseLeave(event) {
    const div = event.target;
    div.style.backgroundColor = "#524848";
    div.style.transform = "scale(1)";
}

// кружечок який літає за курсором
// document.addEventListener("mousemove", (event) => {
//     const circle = document.getElementById("circle");
//     circle.style.top = (event.y - 20) + "px";
//     circle.style.left = (event.x - 20) + "px";
// });

function randomColor() {
    const square = document.getElementById("randomColorSquare");
    const r = Math.floor(Math.random() * 256); // 0 - 255
    const g = Math.floor(Math.random() * 256); // 0 - 255
    const b = Math.floor(Math.random() * 256); // 0 - 255
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Переміщення квадрату
const startX = 8;
let isStart = true;
function moveSquare() {
    const endX = window.innerWidth - 16 - 150;
    const runner = document.getElementById("runner");
    if (isStart) {
        runner.style.left = endX + "px";
        runner.style.transform = "scale(0.5)";
        isStart = false;
    } else {
        runner.style.left = startX + "px";
        runner.style.transform = "scale(1)";
        isStart = true;
    }
}

// Читання з клавіатури
document.addEventListener("keydown", (event) => {
    const inputText = document.getElementById("inputText");
    if(event.key === "Backspace") {
        if(inputText.innerText.length > 0) {
            inputText.innerText = inputText.innerText.slice(0, inputText.innerText.length - 1);
        }
    } else {
        inputText.innerText += event.key;
    }
})

// Зміна розміру вікна
window.addEventListener("resize", (event) => {
    const windowSize = document.getElementById("windowSize");
    windowSize.innerText = window.outerWidth + "x" + window.outerHeight;
});
