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
//--------//
b = [4, 5, 6];
c = [...a, ...b]; //spread operator
console.log("c: " + c);
//final spread operator
const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);