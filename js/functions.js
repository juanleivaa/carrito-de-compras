// function regularFunction(name) {
//     console.log('Hola ' + name);
//     return 'Valor retornado ' + name;
// }

const expressionFunction = function(name)  {
    return 'Hola ';
}

// console.log(regularFunction('Jose'));
console.log(expressionFunction('Pedrito'));
const arrowFunctionExpression = () => 'Hola ' + name;
console.log(arrowFunctionExpression('Jose'));

function myFunction() {
    console.log(this);
}
//This hace referencia al objeto windows
myFunction();

//Object scope
// var name = 'Outside Name'
const myObject = {
    name: 'Jhon',
    method() {
        console.log(this);
        const self = this;
        const callback = function () {
            console.log(this.name);
            console.log(self.name);
        }
        const arrowCallback = () => {
            console.log(this.name);
        }
        callback();
        arrowCallback();
    }
}

myObject.method();

// //Tercer caso
// function MyFunction() {
//     this.name = 'Jhon';
//     console.log(this);
// }

// new MyFunction();

// class MyClass {
//     constructor(name) {
//         this.name = name;
//         // console.log(this);
//     }

//     method() {
//         console.log(this);
//         return this.name;
//     }
// }

// const user = new MyClass('Doe');

// console.log(user.method());

function regularFunction() {
    const myArrowFn = () => {
        console.log(arguments);
    }
    myArrowFn(1, 2, 3);
}

//Throw error
regularFunction();

function sumArgs(...numbers) {
    console.log(numbers); // [5, 6]
    return numbers.reduce((sum, number) => sum + number);
  }
  
  sumArgs(5, 6, 7, 8, 8); // => 11
  console.log(sumArgs(5, 6, 7, 8, 8)); // => 11)

  //IMPLICIT RETURN STATEMENT
//   arrow +++
//regular missing undefined