console.log('Bài OOP');
//Khởi tạo đối tượng
class Person {
    //Các thuộc tính
        // name: string;
        // age: number;
        // job: string;
    private lastName: string
    private firstName: string
    //Hàm tạo
    constructor(lastName: string, firstName: string){
        this.lastName = lastName;
        this.firstName = firstName;
        // this.name = name;
        // this.age = age;
        // this.job = job;
    }
    //Các phương thức
    setFullName(firstName: string , lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set setLastName(lastName: string) { this.lastName = lastName; }   

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let person1 = new Person('Le' , 'Binh')
person1.setFullName('Nguyen' , 'Huy')
person1.setLastName = 'Tran'

console.log(person1.getFullName());



