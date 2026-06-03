// DOMContentLoaded - виконується тоді коли HTML повністю завантажився
document.addEventListener("DOMContentLoaded", () => {
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    btn2.onclick = clickButton;
    btn3.addEventListener("click", clickButton);
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