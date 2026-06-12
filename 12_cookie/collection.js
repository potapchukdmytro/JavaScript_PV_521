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






document.addEventListener("DOMContentLoaded", updateTable);

function updateTable() {
    const table = document.getElementById("tableBody");
    
    const json = getCookie("books");

    if(!json) {
        return;
    }

    const books = JSON.parse(json);
    table.innerHTML = "";
    for(const b of books) {
        const tdTitle = document.createElement("td");
        tdTitle.innerText = b.title;

        const tdAuthor = document.createElement("td");
        tdAuthor.innerText = b.author;

        // icon
        const i = document.createElement("i");
        i.classList.add("bi");
        i.classList.add("bi-trash3-fill");
        i.classList.add("text-danger");
        i.addEventListener("click", () => {removeBook(b)});   
        const tdI = document.createElement("td");
        tdI.appendChild(i);

        const tr = document.createElement("tr");
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdI);

        table.appendChild(tr);
    }
}

function removeBook(book) {
    const json = getCookie("books");
    if(!json) {
        return;
    }

    const books = JSON.parse(json);
    const newBooks = books.filter(b => b.title !== book.title && b.author !== book.title);
    setCookie("books", JSON.stringify(newBooks), new Date(2027, 1, 1).toUTCString());
    updateTable();
}

function addBookHandle(e) {
    e.preventDefault();

    const form = e.target;
    const book = {
        title: form["title"].value,
        author: form["author"].value
    }

    // Додавання елементу до колекції у cookie
    const books = getCookie("books");
    if(books) {
        const newBooks = JSON.parse(books);
        newBooks.push(book);
        setCookie("books", JSON.stringify(newBooks), new Date(2027, 1, 1).toUTCString());
    } else {
        const newBooks = [book];
        setCookie("books", JSON.stringify(newBooks), new Date(2027, 1, 1).toUTCString());
    }

    updateTable();
}