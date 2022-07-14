"use strict";
/*
function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
  }
console.log(replaceString('мир', 'web', 'Дивный новый мир'));
*/

/*
const arr = [8, 5, 4, 56, 9, 31];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}
*/

/*
const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);
*/

/*
// работа с поверхностными копиями
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y:4
    }
};

const nweNumbers = copy(numbers);

nweNumbers.a = 10;
nweNumbers.c.x = 10;

// console.log(nweNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);
*/

/*
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'safasdfsdfs';

// console.log(newArray);
// console.log(oldArray);
*/

// const video = ['youtube', 'vimeo', 'rtube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);

/*
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

//---
const array = ["a", "b"];

const newArr = [...array];

console.log(newArr);

const q = {
    one: 1,
    two: 2
}

const newObj = {...q};
*/

/*
const elements = [
    'Hydroget',
    'Helium',
    'Lithium',
    "berillium"
];
console.log(elements.map(element => element.length));
*/

/*
const arr = [[[1, 2], [3]], [4, 5]];
const flattenedArr = arr.flat(2);
console.log(flattenedArr);
*/

/*
const arr = [1, 8, 6, 4, 2, 5, 3, 7];
arr.sort();
const reversedArr = arr.reverse();
console.log(reversedArr);
*/

/*
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(1));
console.log(arr.at(-2));
*/

/*
const arr1 = [1, 5, 3, 4, 2];
const arr2 = [9, 7, 8, 6, 10];
console.log(arr1.concat(arr2));
*/


const userData = {
    name: "John",
    age: 25,
    isOnline: true
};
console.log(Object.values(userData));
console.log(Object.entries(userData));
console.log(Object.keys(userData));
console.log(Object.keys(userData).length);