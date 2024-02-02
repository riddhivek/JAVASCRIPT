/* ES6 AKA Ecmascript 2015 */
/* let const */
// var productName = 'Laptop';
// code polute

// var age = 18;

// if(age>=18){
//      var driving = true;
// }

// console.log(driving);

/* Function scope */

// function register() {
//      var username = 'rakesh';
//      var password = 'secret';
// }                                          {    error    }

// console.log(register);

/* var / let / const variables */

// var product = 'Laptop';
// var product = 'Mobile';

// let product = 'Laptop';
// let product = "mobile";

// const product = 'Laptop';
// product ='Mobile';

// console.log(product);

/* Hoisting */

// console.log(age);
// let age = 20;

/* window.product */

// var box = "clothes"
// let boxes = "toys"

// console.log(box);
// console.log(boxes);

/* change const value using object */

// const age = {
//     years: 19,
// };
// age.years = 30;

// console.log(age);

// let age = {
//     years:20,
// };
// age.years=40;

// console.log(age);

// var Name={
//     years:20,
//     name:'riddhi'
// };
// Name.years=25;

// console.log(Name);

/* Arrow Functions */

// Arrow functions

// function greet() {
//     console.log('Good afternoon');
//     console.log('Good morning');
// }

// greet();

        //  Addition

// const addition = (a , b) => {
//      console.log(a+b);
// }

// addition(10, 20);

        //   Multiplication

// const multiplication = (a , b) => {
//     console.log(a*b);
// }
       
// multiplication(10, 20);
    
        //   Divition

// const divition = (a , b) => {
//     console.log(a/b);
// }

// divition(10, 20);

/* short method */

// const addition = (a) => {
//      console.log(a+a);
// }

// addition(10);

            //multiplication

// const multiplication = (a) => {
//     console.log(a*a);
// }

// multiplication(10);

            //divition

// const divition = (a) => {
//     console.log(a/a);
// }

// divition(10);

/* this keyword */

// console.log(this);

// const shop = {
//      purchase(){
//          console.log(this);
//      },
//  };

//  shop.purchase();

//  const shop = {
//      purchase: function(){
//          console.log(this);
//      },
//  };

//  shop.purchase();

/* parent context */

// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
// };

// shop.purchase();



// const myButton = document.querySelector('#myButton');

// const shop = {      //  {   error    }
//      price: 100,
//      buy: function () {
//           myButton.addEventListener('click', function () {
//                console.log(this);
//                console.log('I spent ' + this.price);
//           });
//      },
// };
// shop.buy();

// const myButton = document.querySelector('#myButton');

// const shop = {
//      price: 100,
//      buy: function () {
//           const self = this;
//           myButton.addEventListener('click', function () {
//                console.log(this);
//                console.log('I spent ' + self.price);
//           });
//      },
// };
// shop.buy();

/* Problem solve with arrow function */

// const myButton = document.querySelector('#myButton');

// const shop = {
//     price: 100,
//     buy: function () {
//         myButton.addEventListener('click', () => {
//             // console.log(this);
//             console.log('I spent ' + this.price);
//         });
//     },
// };
// shop.buy();


/* Template literals AKA(Also Known As) backticks */


// const firstName = 'Riddhi';
// const lastName = 'Vekariya ';

// console.log(firstName + ' ' + lastName);

// hello
// how are you

// const message = 'hello \n' + 'hello';
// console.log(message);

// const message = `hello
// how are you
// `
// console.log(message);

// const name = 'Rakesh';
// const age = 20;
// const message = `hello ${name}
// how are you
// `;
// console.log(message);
 
/* with javascrit expression */

// const name = 'Rakesh';
// const message = `hello ${5 * 6}
// how are you
// `;
// console.log(message);

// Enhanced object literals
// computed propery keys
// Method defination shorthand
// Property shorthand

// const product = {
//      name : "Mobile",
//      price : 100,
// }
// console.log(product);

// const keyName = "name"

// const product = {
//      [keyName]: "Mobile",
//      price : 100,
// }
// console.log(product);


/* Method Definiation Shorthand */

// const keyName = "name"

// const product = {
//      buy: function() {
//           console.log("hello");
//      }
// }
// product.buy()

// const keyName = "name"

// const product = {
//      buy(){
//           console.log("hello");
//      }
// }
// product.buy()


/* Property shorthand */

// const accessToken = 'dsjfhkadhskfhk';
// const refreshToken = 'adkjfljdlffdd';

// const user = {
//     accessToken : accessToken,
//     refreshToken :  refreshToken
// };
// console.log(user);

// const user = {
//     accessToken,
//     refreshToken,
// };
// console.log(user);


/*  Destructuring */

// const user = {
//     name: 'John Doe',
//     age: 30,
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);


// const user = {
//      name: 'John Doe',
//      age: 30,
//  };
// const { name } = user;
// console.log(name);

// const { name , age } = user;
// console.log(name);
// console.log(age);

/* With Alias */

// const { name : firstName, age } = user;
// console.log(firstName);
// console.log(user.name);

/* javascript Array */ 

// const data = ['Rakesh', 30, 'Engineer'];
// console.log(data[0]);

/* Declarative Way */

// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// console.log(name);
// console.log(age);
// console.log(profession);

/* In Use React */
// const data = ['Rakesh', 30, 'Engineer'];
// const [name, age, profession] = data;
// const [count, setCount] = useState();