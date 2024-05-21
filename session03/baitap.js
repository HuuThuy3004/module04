"use strict";
//Bai1
function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}
console.log('Bai1', avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Bai2
function findMax(arr) {
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}
console.log('Bai2:', findMax([1, 6, 19, 11]));
let contactArray = [
    {
        id: 1,
        phone: '0123456789',
        name: 'Anderson'
    },
    {
        id: 2,
        phone: '0987564123',
        name: 'Bobby'
    },
    {
        id: 3,
        phone: '0963852471',
        name: 'Calvin'
    }
];
console.log('Bai3:');
function displayContact() {
    return contactArray;
}
// console.log(1 , displayContact());
function addContact(contact1) {
    contactArray.push(contact1);
    return contactArray;
}
// console.log(2 , addContact({id: 5 , phone: '0258963147' , name: 'Frank'}));
function updateContact(id, value) {
    for (let i = 0; i < contactArray.length; i++) {
        if (contactArray[i].id == id) {
            contactArray.splice(i, 1, value);
        }
    }
    return contactArray;
}
// console.log(3 , updateContact(2 , {id: 3 , phone: '0123456' , name: 'Linda'})
function deleteContact(id) {
    for (let i = 0; i < contactArray.length; i++) {
        if (contactArray[i].id == id) {
            contactArray.splice(i, 1);
        }
    }
    return contactArray;
}
// console.log(4 , deleteContact(5));
//Bai4:
//Gop mang dung: concat()
//Bai5:
function bai5(start, end) {
    let text = '';
    for (let i = start; i < end; i++) {
        if (i % 7 == 0 && i % 5 != 0) {
            text += `${i},`;
        }
    }
    return text.slice(0, text.length - 1);
}
console.log('Bai5', bai5(1, 110));
//Bai6:
let number = [1, 2, 3, 4, 5];
function bai6(a, b) {
    return a * b;
}
