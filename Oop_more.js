class Employee {
    constructor(Emp_name, Emp_sal) {
        this.name = Emp_name;
        this.salary = Emp_sal;
    }
}

e1 = new Employee('Akash', 35000);
console.log("Employee name:", e1.name, ", salary:",e1.salary);

e2 = new Employee('Ankit', 45000);
console.log("Employee name:", e2.name, ", salary:", e2.salary);

