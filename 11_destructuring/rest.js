// Spread(розширення)/Rest оператор


// 1 копіювання
const obj1 = {
    id: 1,
    value: 25
}

const obj2 = { ...obj1 };
// const obj2 = { id: 1, value: 25 };

obj2.id = 2;

console.log(obj1);
console.log(obj2);


const arr1 = [1,2,3,4,5,6,7];

const arr2 = [ ...arr1 ];

// const arr2 = [ 1,2,3,4,5,6,7 ];



// 2 додавання нових елементів
const obj3 = {
    id: 1,
    value: 25
}

const obj4 = { ...obj3, time: "1s" }
// const obj4 = { id: 1, value: 25, time: "1s" }

console.log(obj4);


const arr3 = [1,2,3,4,5,6,7];
const arr4 = [...arr3, 9, 10, 11];
console.log(arr4);


// об'єднати масиви
const arr5 = [...arr3, ...arr4];
// const arr5 = [1,2,3,4,5,6,7,     1,2,3,4,5,6,7,9, 10, 11];
console.log(arr5);


// об'єднати об'єкти
const user1 = {
    userName: "user",
    email: "john@mail.com"
}

const passport1 = {
    seria: "131248",
    year: 2000
}

const userFullData = {...user1, ...passport1, id: 1, phone: "1234567890"};
console.log(userFullData);



// 3 редагування властивостей
const obj5 = {
    id: 1,
    value: 25
}

const obj6 = { ...obj1, id: 2 };
console.log(obj6);



const orc = {
    type: "orc",
    moveSpeed: 100,
    hp: 200,
    level: 1,
    armor: 10,
    weapon: "axe"
}

const orcLevel2 = {...orc, level: 2, hp: 220}


const userState = {
    isLogined: "false",
    productsInCart: [],
    isOpenChat: true,
    scrollY: 100
}

const newUserState = {...userState, isLogined: true};
