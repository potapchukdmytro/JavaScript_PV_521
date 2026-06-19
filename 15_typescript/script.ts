const text: string = "Hello world";

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

const sumRes = sum(10, 15);

// any - це будь який тип даних
function anyType(value: any) {
    console.log(value);
}

anyType(100);
anyType("text");
anyType(["red", "yellow", "white"]);

const numbers: number[] = [1, 345, 123, 32,5436, 76,89];

const dt: Date = new Date();



// Власні типи
interface ICar {
    model: string;
    brand: string;
    color: string;
    year: number;
    volume: number;
}

interface Supercar extends ICar {
    maxSpeed: number;
    boost: number;
}

const car: ICar = {
    model: "Q8",
    brand: "Audi",
    color: "White",
    year: 2026,
    volume: 2.4
};

function printCar(car: ICar) {
    console.log(`${car.brand}: ${car.model}`);
}

printCar(car);
printCar({ model: "Focus", brand: "Ford", color: "black", year: 2025, volume: 3.0});




type User = {
    id: number;
    name: string;
    age: number;
    isMale: boolean;
}

const user: User = {id: 1, name: "john", age: 30, isMale: true};



interface Cat {
    name: string;
    color: string;
    age: number;
}

interface Dog {
    name: string;
    breed: string;
    age: number;
}

type CatDog = Cat | Dog;


const cat: Cat = { name: "Кузя", age: 2, color: "Сірий" };
const dog: Dog = { name: "Шарік", age: 1, breed: "Дворняга" };

const unknown: CatDog = dog;





interface LoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface RegisterData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
}

type AuthForm = LoginData | RegisterData;

function authEvent(form: AuthForm) {
    console.log(form.email);
}




function saveUser(user: User | null) {
    if(user) {
        console.log(user.age);
    } else {
        console.log("user not found");
    }
}

saveUser({id: 1, name: "john", age: 30, isMale: true});
saveUser(null);






enum Direction {
    Up,
    Down,
    Left,
    Right
}

const dir: Direction = Direction.Down;



enum StatusCode {
    Ok = 200,
    Create = 201,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
}

const statusServer: StatusCode = 500;

if(statusServer === StatusCode.InternalServerError) {

}

const responseCode = 200;

console.log(StatusCode[responseCode]);





type FunnyType = Cat | Dog | "Я люблю тваринок";

const funny: FunnyType = "Я люблю тваринок";

type Winter = "Грудень" | "Січень" | "Лютий";

const month: Winter = "Грудень";

type Age = 18 | 28 | 38;

const userAge: Age = 18;