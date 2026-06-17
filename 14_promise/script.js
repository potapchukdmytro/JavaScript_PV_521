// function loadApiData2() {
//     return new Promise((resolve, reject) => {

//     });
// }

const loadApiData = () => {
    // resolve - успішна відповідь
    // reject - не успішна відповідь
    return new Promise((resolve, reject) => {
        const response = 200;

        if (response == 200) {
            resolve({ data: [], message: "Дані з серверу успішно отримано" });
        } else {
            reject("Помилка отримання даних з серверу");
        }
    });
};

// Робота з Promise функціями через async await
const fetchDataAsync = async () => {
    try {
        const result = await loadApiData();
        console.log(result);
    } catch (error) {
        console.log("Помилка " + error);
    } finally {
        console.log("Завершення роботи з API");
    }
};
// fetchDataAsync();

// Робота з Promise функціями через then catch
loadApiData()
    .then((result) => console.log(result)) // якщо resolve
    .catch((error) => console.log(error)) // якщо reject
    .finally(() => console.log("Завершення роботи з API"));

// Якщо reject не потрібен то його можна не приймати
function getUserId() {
    return new Promise((resolve) => {
        resolve(1);
    });
}

function getUserData(id) {
    return new Promise((resolve) => {
        resolve({ userId: id, name: "Joshua" });
    });
}

// async await
async function userProfile() {
    const userId = await getUserId();
    const userData = await getUserData(userId);
    console.log(userData);
}

// userProfile();

// then catch
getUserId()
    .then((userId) => getUserData(userId)) // для promise фукнції getUserId
    .then((userData) => console.log(userData)); // для promise фукнції getUserData

// функції для роботи з багатьма promise
function f1() {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve("function 1"), 500),
    );
}

function f2() {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve("function 2"), 1000),
    );
}

function f3() {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve("function 3"), 2000),
    );
}

// Promise.all(); - чекає на виконання всіх promise.
// Повертає масив результатів.
// Якщо хоча б один буде reject то зупиняється
Promise.all([f1(), f2(), f3()]).then((res) => console.log(res));

// Promise.allSettled(); - чекає на виконання всіх promise.
// Неважливо з помилкою чи без
// Поветає масив результатів де status - статус виконання функції, value - дані що повертає функція у resolve
// Статуси: fulfilled - виконано (resolve), rejected - не виконалося (reject)

Promise.allSettled([f1(), f2(), f3()]).then((res) => console.log(res));

// Promise.race(); - повертає результат promise який виконався найшвидше з помилкою або без
Promise.race([f1(), f2(), f3()]).then((res) => console.log(res));

// Promise.race(); - чекає на перший успішний promise.
// Якщо хоча б один буде reject то зупиняється
Promise.any([f1(), f2(), f3()]).then((res) => console.log(res));











function setRgb(box, interval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            resolve();
        }, interval);
    });
}

async function box(divName, interval) {
    const box = document.getElementById(divName);
    while (true) {
        await setRgb(box, interval);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    box("box1", 500);
    box("box2", 2000);
    box("box3", 100);
});