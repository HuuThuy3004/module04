console.log('Làm bài tập')
//Câu1
class Vehicle {
    name: string
    year: number
    company: string

    constructor(name: string, year: number, company: string){
        this.name = name
        this.year = year
        this.company = company
    }
}

let vehicle1 = new Vehicle('Motorbike' , 2019 , 'Honda') 
let vehicle2 = new Vehicle('Bicycle' , 2023 , 'Trioblade') 

console.log('Câu 1:' , vehicle1 , vehicle2);

//Câu2
class Student {
    public id: number
    public age: number
    public email: string

    constructor(id: number, age: number, email: string){
        this.id = id
        this.age = age
        this.email = email
    }
}

let student1 = new Student(1 , 20 , 'abcd@gmail.com')
let student2 = new Student(2 , 22 , 'opik@gmail.com')
let studentArr: Student[] = [student1, student2]
console.log('Câu 2:' , studentArr);

//Câu3
class Employeee {
    public name: string
    protected company: string
    private phone: string

    constructor(name: string, company: string, phone: string) {
        this.name = name
        this.company = company
        this.phone = phone
    }
    
    printInfo() {
        console.log('Câu 3:' , this.name , this.company , this.phone);
    }
}

let employee1 = new Employeee('John' , 'Google' , '0123456789')
employee1.printInfo()

//Câu4
class Vehicle2 {
    readonly id: number 
    public name: string
    protected year: number
    private company: string

    constructor(id: number , name: string, year: number, company: string){
        this.id = id
        this.name = name
        this.year = year
        this.company = company
    }

    printInfo() {
        console.log('Câu 4:' , this.id, this.name, this.year, this.company);
    }
}

let vehicle3 = new Vehicle2(32 , 'Boat', 2012, 'Titanic')
vehicle3.printInfo()

//Câu5
class Department {
    readonly id: number
    private name: string
    private employee: string[]

    constructor(id: number, name: string, employee: string[]) {
        this.id = id
        this.name = name
        this.employee = employee
    }

    describe() {
        console.log('Câu 5:' , this.id, this.name);
    }
}

let department1 = new Department(1 , 'IT' , ['Anderson' , 'Bobby'])
department1.describe()

//Câu6
class Song {
    readonly id: number
    private name: string
    private length: number

    constructor (id: number, name: string, length: number) {
        this.id = id
        this.name = name
        this.length = length
    }

    set setSong (song: Song) {
        this.name = song.name
        this.length = song.length
    }

    get getSong () {
        let result = this.name + ' ' +this.length + ' ' + this.id
        return result
    }
}

let song1 = new Song(1 , 'Love Yourself' , 13)
// song1.setSong = {name: 'Sorry'  , length : 5}
console.log('Câu 6:' , song1.getSong)

//Cau7
class Circle {
    private radius: number
    private pi: number = 3.14

    constructor(radius: number) {
        this.radius = radius
    }

    circleArea(x: number, y: number) {
        let area = this.pi * this.radius * this.radius
        let result = 'Dien tich: ' + area
        return result
    }

    circleRadius(x: number, y: number) { 
        let radius = Math.sqrt(x * x + y * y)
        let result = 'Ban kinh: ' + radius
        return result
    }
}

let circle1 = new Circle(5)
console.log('Câu 7:' , circle1.circleArea(2, 2) , '|' , circle1.circleRadius(4,3) );

//Câu9
class Rectangle {
    private width: number
    private height: number

    constructor (width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    rectangleArea(x: number, y: number) {
        let area = this.width * this.height
        let result = 'Dien tich: '+ area
        return result
    }

    rectanglePerimeter(x: number, y: number) {
        let perimeter = (this.width + this.height) * 2
        let result = 'Chu vi: '+ perimeter
        return result
    }   
}

let rectangle1 = new Rectangle(2, 2)
console.log('Câu 9:' , rectangle1.rectangleArea(2, 2), '|' , rectangle1.rectanglePerimeter(2, 2));

//Câu 10
class Library {
    private books: Book[] = []
    constructor () { }

    addBook(book: Book): void {
        // Kiểm tra xem sách đã tồn tại trong thư viện chưa
        const existingBook = this.books.find(b => b.title === book.title);

        if (existingBook) {
            // Nếu sách đã tồn tại, tăng số lượng
            existingBook.increaseQuantity();
            console.log(`Sách "${book.title}" đã tồn tại. Số lượng đã được tăng ${book.increaseQuantity()}}`);
        } else {
            // Nếu sách chưa tồn tại, thêm mới vào thư viện
            this.books.push(book);
            console.log(`Thêm sách "${book.title}" thành công.`);
        }
    }

}

class Book {
    constructor(public title: string, private quantity: number = 1) {
        // Khởi tạo sách với tên, tác giả và số lượng mặc định là 1
    }

    increaseQuantity(){
        return this.quantity++
    }
}
const myLibrary = new Library();
const newBook = new Book("One piece");
const newBook2 = new Book("Harry Potter");

console.log('Câu 10:');
myLibrary.addBook(newBook); // Thêm sách mới
myLibrary.addBook(newBook2); // Thêm sách mới
myLibrary.addBook(newBook2); // Thêm sách đã tồn tại

//Câu 11




//Câu 12