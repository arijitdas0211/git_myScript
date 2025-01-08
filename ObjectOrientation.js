class Student {
    constructor(s_name, s_age, s_email) {
        this.name = s_name;
        this.age = s_age;
        this.email = s_email;
    }

    eat() {
        console.log(this.name, "is eating.");
    }

    learn() {
        console.log(this.name, "is learning.");
    }
}

s1 = new Student('Arijit', 28, 'arijit@gmail.com');
/** s1 is the object name.   
 * Right to Left associative.
 * () -> Calling of constructor method of Student class.
 * 
*/

s2 = new Student('Ankit', 26, 'ak@gmail.com');

console.log(s1.name, s1.age, s1.email);
s1.eat();

console.log(s2.name, s2.age, s2.email);
s2.learn();

// class Fan {
//     constructor(f_brand, f_color, f_price) {
//         this.brand = f_brand;
//         this.color = f_color;
//         this.price = f_price;
//     }
// }
