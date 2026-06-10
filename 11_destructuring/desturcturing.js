// деструктуризація

const user = {
    email: "user@mail.com",
    password: "qwerty",
    name: "John",
    surname: "Smith",
    age: 30,
    isMale: true,
};

const user2 = {
    email: "user2@mail.com",
    password: "qwerty",
    name: "Mike",
    surname: "Thomson",
    age: 25,
    isMale: true,
};


// Якщо імена повторюються то можна дати псевдоніми
const { email: email1, password: pass1 } = user;
const { email: email2, password: pass2 } = user2;

const { email, password } = user;

login(user);

function login({ email, password }) {
    // const {email, password} = credentials;

    if (email == "user@mail.com") {
        if (password == "qwerty") {
            console.log("Login success");
        }
    }
}

const movie = {
    title: "Harry Potter",
    genre: "Fantasy",
    year: 2001,
};

const category = {
    name: "Clothes",
};

printName(user);
printName(category);
printName(movie);

function printName({ name }) {
    if (name) {
        console.log(name);
    } else {
        console.log("Property 'name' not found");
    }
}

button({ text: "MyButton", color: "red" });

function button({ text, color, width, height }) {
    const btn = document.createElement("button");

    if (text) {
        btn.innerText = text;
    }

    if (color) {
        btn.style.backgroundColor = color;
    }

    if (width) {
        btn.style.width = width;
    }

    if (height) {
        btn.style.height = height;
    }
}

// Об'єкт в об'єкті

const userData = {
    name: "Nika",
    age: 25,
    address: {
        country: "Ukraine",
        city: "Rivne",
        state: "Rivnenska",
        postalCode: 37000,
    },
};

const {name, address: { country }} = userData;

// const name = userData.name;
// const { country } = userData.address;

console.log(`${name}: ${country}`);

const { name: userName } = userData;
// const userName = userData.name;

// Об'єкт в об'єкті в об'єкті

const data = {
    firstName: "Tom",
    location: {
        address: {
            country: "Ukraine",
            city: "Rivne",
            state: "Rivnenska",
            postalCode: 37000,
        },
        coord: {
            lat: 50,
            lon: 50
        },
    },
};

const {firstName, location: {address: {city}}} = data;
console.log(`${firstName}: ${city}`);


// Деструктуризація та масиви

const arr = [3,5,67,3,4,68,23,312,576,5,2,567,9];

// Отримує елементи по порядку
// first = 3  second = 5
const [first, second] = arr;
console.log(first, second);

// Пропускає два перших та записуємо третій елемент
// third = 67
const [,,third] = arr;
console.log(third);


const [rgb, hex] = generateColor();
console.log(rgb);
console.log(hex);



function generateColor() {
    const rgb = "255,0,0";
    const hex = "#FF0000";

    return [rgb, hex];
}
