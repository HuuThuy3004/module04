"use strict";
console.log('Bài OOP');
//Khởi tạo đối tượng
class Person {
    //Hàm tạo
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        // this.name = name;
        // this.age = age;
        // this.job = job;
    }
    //Các phương thức
    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set setLastName(lastName) { this.lastName = lastName; }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let person1 = new Person('Le', 'Binh');
person1.setFullName('Nguyen', 'Huy');
person1.setLastName = 'Tran';
console.log(person1.getFullName());
