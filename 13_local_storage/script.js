// localstorage

function baseLocalstorageFunctions() {
    // Запис
    localStorage.setItem("key", "value");
    localStorage.setItem("key2", "value");
    localStorage.setItem("key3", "value");

    // Читання
    // Якщо ключа не існує то повертається null
    const key = localStorage.getItem("key");
    const theme = localStorage.getItem("theme");

    console.log(key);
    console.log(theme);

    // Видалення
    localStorage.removeItem("key");

    // clear - видаляє всі записи
    localStorage.clear();

    // length - кількість записів
    console.log(localStorage.length);

    // key - повертає ключ по індексу
    // Якщо такого індексу немає то повертається null
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

function registerSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const data = {
        name: form["name"].value,
        email: form["email"].value,
        password: form["password"].value,
    };

    // зберігання у localstorage

    const usersJson = localStorage.getItem("users");
    if (usersJson) {
        const users = JSON.parse(usersJson);

        if (!users.find((u) => u.email == data.email)) {
            users.push(data);
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            alert(`Пошта ${data.email} вже використовується`);
            return;
        }
    } else {
        localStorage.setItem("users", JSON.stringify([data]));
    }

    // перекинути користувача на іншу адресу
    window.location = "/login";
}

function loginSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const data = {
        email: form["email"].value,
        password: form["password"].value,
    };

    const usersJson = localStorage.getItem("users");

    if (usersJson) {
        const users = JSON.parse(usersJson);
        const user = users.find((u) => u.email === data.email);
        if (user) {
            if (user.password === data.password) {
                window.location = "/";
            } else {
                alert("Пароль вказано невірно");
            }
        } else {
            alert("Пошта вказана невірно");
        }
    }
}

function navbar() {
    return `
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Navbar</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="/"
                                >Домашня сторінка</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="me-3 d-flex gap-4">
                    <a class="nav-link active" aria-current="page" href="/login"
                        >Увійти</a
                    >
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/register"
                        >Зареєструватися</a
                    >
                </div>
            </div>
        </nav>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
   const div = document.getElementById("navbar");
   div.innerHTML = navbar(); 
});
