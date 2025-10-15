// Задача 1 //

const myObject = {
  key1: "value1",
  key2: 123,
};

console.log("Original object:", myObject);

delete myObject.key1;
delete myObject.key2;

console.log("Object after deleting keys:", myObject);

// Задача 2 //

let resturant = {
  name: "Yeero Village",
  type: "greek",
};

if ("name" in resturant) {
    console.log(true);
} else {
    console.log(false);
}

// Задача 3 //

//Keys: name, age, isHappy//
//Values: "Garry", 18, true//
const student = {
  name: "Garry",
  age: 18,
  isHappy: true,
};
console.log("Keys:");
for (const key in student) {
    if(student.hasOwnProperty(key)){
        console.log(key);
    }
}
console.log("Values:");
for (const key in student) {
    if(student.hasOwnProperty(key)){
        console.log(student[key]);
    }
}

// Задача 4 //

const colors = {
'ru pum pu ru rum': {
red: 'красный',
green: 'зеленый',
blue: 'синий'
},
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Задача 5 //

let salaries = {
andrey: 500,
sveta: 413,
anton: 987,
igor: 664,
alexandra: 199
}
const employees = [
    { name: "andrey", salary: 500 },
    { name: "sveta", salary: 413 },
    { name: "anton", salary: 987 },
    { name: "igor", salary: 664 },
    { name: "alexandra", salary: 199 }
];
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
}
const averageSalary = totalSalary / employees.length;
console.log("Average Salary:", averageSalary);

// Задача 6 //

let login = prompt('Enter your login:');
let password = prompt('Enter your password:');

let user = {
  login: 'world',
  password: 'pass123'
};
let confirmLogin = user.login === login;
let confirmPassword = user.password === password;
if (confirmLogin && confirmPassword) {
  console.log('Welcome');
} else {
  console.log('Access denied');
}