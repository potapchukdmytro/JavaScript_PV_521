// document.cookie - доступ до cookie

// запис у кукі
function writeCookie() {
    // якщо ключ вже існує то перепишеться його value
    document.cookie = "myKey=myValue;";
    document.cookie =
        "email=user@mail.com; expires=Sat, 13 Jun 2026 15:30:00Z; path=/;";
}

// Видалення кукі
function deleteCookie() {
    document.cookie = "myKey=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
}

// Читання кукі
function readCookie() {
    // document.cookie повертає стрінгу зі всіма кукі які розділені '; '

    const cookie = document.cookie.split("; ")
    for(const c of cookie) {
        // c - буде формату key=value
        const item = c.split("=");
        if(item[0] === "myKey") {
            console.log(item[1]);
            return;
        }
    }
}


// функції для роботи з кукі які можна використувати в інших проектах
function setCookie(key, value, expires = null, path = "/") {
    document.cookie = `${key}=${value}; path=${path}; expires=${expires};`;
}

function removeCookie(key, path = "/") {
    document.cookie = `${key}=; path=${path}; expires=${new Date(0)};`
}

function getCookie(key, path = "/") {
    const cookie = document.cookie.split("; ")
    for(const c of cookie) {
        // c - буде формату key=value
        const item = c.split("=");
        if(item[0] === key) {
            return item[1];
        }
    }
    return null;
}

// Допоміжні функції
function setCookieByHours(key, value, hours = 1, path = "/") {
    const now = new Date();
    const expires = new Date(now.getTime() + hours * 60 * 60 * 1000);

    document.cookie = `${key}=${value}; path=${path}; expires=${expires};`;
}

function getAllCookie() {
    const res = [];
    const cookie = document.cookie.split("; ");

    for(const c of cookie) {
        const item = c.split("=");
        res.push({key: item[0], value: item[1]});
    }

    return res;
}











function formSetCookie(event) {
    event.preventDefault();
    const form = event.target;

    const key = form["key"].value;
    const value = form["value"].value;
    const expires = form["expires"].value;

    setCookie(key, value, new Date(expires).toUTCString());
}