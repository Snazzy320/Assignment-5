

const students = [
    { id: 1, name: 'Alice', age: '20', grade: 'A'},
    { id: 2, name: 'Bob', age: '22', grade: 'B'},
    { id: 3, name: 'Charlie', age: '21', grade: 'C'},
    { id: 4, name: 'David', age: '19', grade: 'B'},
    { id: 5, name: 'Eva', age: '23', grade: 'A'},
]

const studentNames = students.map((each)=>{
    return each.name
})

console.log(studentNames);


students.forEach((each)=>{
    each.age - 2
    console.log(each.age - 2);
})

const topStudents =  students.filter((each)=>{
    return each.grade == 'A'
})

console.log(topStudents);