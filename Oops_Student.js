class Student {
    constructor(S_name, S_age, S_marks) {
        this.name = S_name;
        this.age = S_age;
        this.marks = S_marks;
    }

    learn() {
        console.log(this.name,"is learning.");
    }

    work() {
        console.log(this.name,"is working.");
    }
}

const s1 = new Student("Ankit", 26, 300);
s1.learn();
s1.work();

const s2 = new Student("Akash", 28, 400);
s2.learn();
s2.work();

/**
 * has part - name, age
 * does part - work(). learn()
 */
