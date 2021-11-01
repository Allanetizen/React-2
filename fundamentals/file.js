const student = {
    ID: '21',
    name: 'Jhon',
    GPA: '3.0',
};

const { ID, name, GPA } = student;

//----------------------
// no destructuring
const users = this.state.users;
const counter = this.state.counter;

// destructuring
const { users, counter } = this.state;
// no destructuring
function Greeting(props) {
    return <h1>{props.greeting}</h1>;
}

// destructuring
function Greeting({ greeting }) {
    return <h1>{greeting}</h1>;
}
// rest destructuring
const { users, ...rest } = this.state;
//normal concatenation
a = [1, 2, 3];
b = [4, 5, 6];
c = a.concat(b);
console.log("c: " + c);
//---/spread operator-----//
b = [4, 5, 6];
c = [...a, ...b]; //the spread operator
console.log("c: " + c);

//final spread operator
const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);

//---------Arrow functions with Hooks---------\\
// JavaScript ES5 function
function getGreetingFunc() {
    return 'Welcome to JavaScript';
  }
  
  // JavaScript ES6 arrow function with body
  const getGreetingArrow1 = () => {
    return 'Welcome to JavaScript';
  }
  
  // JavaScript ES6 arrow function without body and implicit return
  const getGreetingArrow2 = () =>
    'Welcome to JavaScript';
  
  console.log(getGreetingFunc());
  console.log(getGreetingArrow1());
  console.log(getGreetingArrow2());

  //without arrow function
  //---------------------const students = [
    const students = [
        { ID: 1, present: true},
        { ID: 2, present: true},
        { ID: 3, present: false}, 
      ];
      
      const presentStudents = students.filter(function(student){return student.present;});
      console.log(presentStudents);


 //with arrow function
 const students = [
    { ID: 1, present: true},
    { ID: 2, present: true},
    { ID: 3, present: false}, 
  ];
  
  const presentStudents = students.filter(student => student.present);
  console.log(presentStudents);