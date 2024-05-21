"use strict";
console.log('Hello TS THT');
//Các kiểu dữ liệu đơn giản
let age = 15;
let fullName = 'Tran Huu Thuy';
let isCheck = false;
let empty = null;
let undefinedd = undefined;
//Các kiểu dữ liệu phức tạp
let numbers = [1, 2, 3, 4, 5];
let students = ['Huy', 'Mai', 'Thanh'];
// let student: Student = {
//     name: 'Hanh',
//     address: 'Quang Nam',
//     age: 22
// }
let students1 = [
    {
        name: 'Thanh',
        address: 'Quang Nam',
        age: 22
    },
    {
        name: 'Binh',
        address: 'Quang Nam',
        age: 22
    }
];
function sayHello() {
    console.log('Hello');
}
sayHello();
function sum(a, b) {
    return a + b;
}
sum(17, 23);
//----------------------------------------------------------------------
//Bai1
let name2 = 'John';
let age2 = 25;
let job2 = 'Docter';
function bai1(name1, age1, job) {
    console.log('Bai1:', name1, age1, job);
}
bai1(name2, age2, job2);
//Bai2
// let userName: string = ''
// userName = 1 // Giải thích:  Type 'number' is not assignable to type 'string'.
//Bai3
let a, b, c, result1, result2;
a = 10, b = 15, c = 20;
result1 = a + b;
result2 = result1 + c;
//Bai4
let check = false;
if (check) {
    console.log('Bai4:', 'Xin chào');
}
else {
    console.log('Bai4:', 'Tạm biệt');
}
//Bai5
let variable1, variable2 = 2, variable3;
console.log('Bai5:', variable1, variable2, variable3);
//Bai6
let ss1 = 2, ss2 = "2";
// console.log(ss1 == ss2); //Giải thích: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
//Bai7
let num1 = 3, num2 = 2, num3;
num3 = num1 + num2;
console.log('Bai7:', num3);
//Bai8
let firstName = 'lionel', lastName = 'messi', fullName1;
if (firstName.charAt(0) != firstName.charAt(0).toUpperCase() && lastName.charAt(0) != lastName.charAt(0).toUpperCase()) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    fullName1 = firstName + ' ' + lastName;
    console.log('Bai8:', fullName1);
}
//Bai9
let input;
