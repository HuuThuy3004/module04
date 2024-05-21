console.log('Hello TS THT')

//Các kiểu dữ liệu đơn giản
let age: number = 15 
let fullName: string = 'Tran Huu Thuy'
let isCheck: boolean = false
let empty: null = null
let undefinedd: undefined = undefined

//Các kiểu dữ liệu phức tạp
let numbers: number[] = [1,2,3,4,5]
let students: string[] = ['Huy' , 'Mai' , 'Thanh']

//C1 kiểu object:
// type Student = {
//     name: string,
//     address: string,
//     age: number
// }
//C2 kiểu object:
interface Student {
    name: string,
    address: string,
    age: number
}

// let student: Student = {
//     name: 'Hanh',
//     address: 'Quang Nam',
//     age: 22
// }

let students1: Student[] = [
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
]

function sayHello() {
    console.log('Hello');
}
sayHello()

function sum(a:number , b:number):number {
    return a + b
}
sum(17,23)

//----------------------------------------------------------------------

//Bai1
let name2: string = 'John'
let age2: number = 25
let job2: string = 'Docter'


function bai1(name1:string , age1:number , job:string) {
    console.log('Bai1:' , name1 , age1 , job);
}

bai1(name2, age2 , job2)

//Bai2
// let userName: string = ''
// userName = 1 // Giải thích:  Type 'number' is not assignable to type 'string'.

//Bai3
let a:number , b:number , c:number , result1:number , result2:number
a = 10 , b = 15 , c = 20
result1 = a + b
result2 = result1 + c

//Bai4
let check:boolean = false
if (check) {
    console.log('Bai4:' , 'Xin chào');
}else{
    console.log('Bai4:' , 'Tạm biệt');
}

//Bai5
let variable1:undefined , variable2:number = 2 , variable3
console.log('Bai5:' , variable1 , variable2 , variable3);

//Bai6
let ss1:number = 2 , ss2:string = "2"
// console.log(ss1 == ss2); //Giải thích: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.

//Bai7
let num1:number = 3 , num2:number = 2 , num3:number
num3 = num1 + num2
console.log('Bai7:' , num3);

//Bai8
let firstName:string = 'lionel' , lastName:string = 'messi' , fullName1:string
if (firstName.charAt(0) != firstName.charAt(0).toUpperCase() && lastName.charAt(0) != lastName.charAt(0).toUpperCase()) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    fullName1 = firstName + ' ' + lastName
    console.log('Bai8:' , fullName1);
}

//Bai9
let input:string
