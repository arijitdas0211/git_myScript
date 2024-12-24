// Data Types: Object , String, number,boolean,null, undefined, 
//Objects: 
//1. JSON Object {Key:Value Pair}, 
//2. Array Object [ele1, ele2, ele3...]
//3. Functions

const s1 = {
    Name: 'Priya',
    Age: 24,
    Fees_Paid: 3400.78,
    Work_experience: {
        ABC: '3 Months',
        XYZ: '2 Months'
    },
    Marks: {
        Maths: 45,
        Science: 56,
    },
    Percentage: ['Sem-I: 84', 'Sem-II: 86', 'Sem-III: 88'],
    Performance: () => console.log('Good'),
}
// console.log(s1, typeof s1);
console.log(s1.Name, s1.Age, s1.Fees_Paid);
console.log("Marks of Maths:", s1.Marks.Maths);
