"use strict";
const text = "Hello world";
function sum(num1, num2) {
    return num1 + num2;
}
const sumRes = sum(10, 15);
// any - це будь який тип даних
function anyType(value) {
    console.log(value);
}
anyType(100);
anyType("text");
anyType(["red", "yellow", "white"]);
const numbers = [1, 345, 123, 32, 5436, 76, 89];
const dt = new Date();
const car = {
    model: "Q8",
    brand: "Audi",
    color: "White",
    year: 2026,
    volume: 2.4
};
function printCar(car) {
    console.log(`${car.brand}: ${car.model}`);
}
printCar(car);
printCar({ model: "Focus", brand: "Ford", color: "black", year: 2025, volume: 3.0 });
const user = { id: 1, name: "john", age: 30, isMale: true };
const cat = { name: "Кузя", age: 2, color: "Сірий" };
const dog = { name: "Шарік", age: 1, breed: "Дворняга" };
const unknown = dog;
function authEvent(form) {
    console.log(form.email);
}
function saveUser(user) {
    if (user) {
        console.log(user.age);
    }
    else {
        console.log("user not found");
    }
}
saveUser({ id: 1, name: "john", age: 30, isMale: true });
saveUser(null);

var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

const dir = Direction.Down;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
    StatusCode[StatusCode["Create"] = 201] = "Create";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
const statusServer = 500;

if (statusServer === StatusCode.InternalServerError) {
}
const responseCode = 200;
console.log(StatusCode[responseCode]);
