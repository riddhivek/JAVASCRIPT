// javascript callback function

{
    // function greet(name){
    //     console.log('HELLO'+' '+name);
    // }
    // greet('RIDDHI');
}

{
    // function greet(name){
    //     console.log('HELLO GOOD MORNING'+' '+name);
    // }
    // greet('All My Friends');
}

// function

{
    // function greet(name,callback){
    //     console.log('HELLO'+' '+name);
    //     callback();
    // }
    // function callme(){
    //     console.log("I am first callback function");

    // }
    // greet("riddhi",callme);
}

// arrow function syntex

{
    // let myfunction=(arg1, arg2, ...argN)=>{
    //     statement(s)
    // }
}

{
    // let myfunction(arg1,arg2, ...argN)=>exprettion
}

// arrow function with no argument

{
    // let greet=()=>console.log('I am Riddhi');
    // greet();
}

// arrow function with one argument

{
    // let greet=x=>console.log(x);
    // greet('I am Riddhi');
}

// arrow function as an exprettion

{
    // let age=28;
    // let welcome=(age<18)?()=>console.log('baby'):()=>console.log('adult');
    // welcome();
}

// multiline arrow function

{
    // let sum=(a,b,c)=>{
    //     let result=a+b;
    //     return result;
    // }
    // let result1=sum(-15+8);
    // console.log(result1);
}

// this with arrow function

{
    // inside an reguler function

    // function person(){
    //     this.name='Riddhi',
    //     this.age='19',
    //     this.sayname=function(){
    //         console.log(this.name);

    //         function innerFunc(){
    //             console.log(this.sayname);
    //         }
    //         innerFunc();
    //     }
    // }
    // let x=new person();
    // x.sayname();
}

// inside an arrow function

{
    // inside an arrow function

    // function person(){
    //     this.name='Riddhi',
    //     this.age='19',
    //     this.sayname=function(){
    //         console.log(this.name);

    //         let innerFunc = () => {
    //             console.log(this.age);
    //         }
    //         innerFunc();
    //     }
    // }
    // const x=new person();
    // x.sayname();
}

// You should not use arrow functions to create methods inside objects.

{
    // let person={
    //     name:'Riddhi',
    //     age:'19',
    //     sayname:()=>{
    //         console.log(this.age);
    //     }
    // }
    // person.sayname();
}

// javascript function call

{
    // function sum(a,b){
    //     return a+b;
    // }
    // var result =sum.call(this,5,15);

    // console.log(result);
}

// using call method

{
    // function sum(a,b){
    //     return a+b;
    // }
    // let result=sum.call(this,5,16);

    // console.log(result);
}

// with and without using call() method

// {
//     function product(a,b){
//         return a/b;
//     }

//     let result1=product(8,5);

//     console.log("return value without using call method:"+result1);

//     let result2=product.call(this,8,5);

//     console.log("return value using call method:"+result2);
// }

// {
//     function product(a,b){
//         return a*b;
//     }

//     let result1=product(8,5);

//     console.log("return value without using call method:"+result1);

//     let result2=product.call(this,8,5);

//     console.log("return value using call method:"+result2);
// }

// {
//     function product(a,b){
//         return a+b;
//     }

//     let result1=product(8,5);

//     console.log("return value without using call method:"+result1);

//     let result2=product.call(this,8,5);

//     console.log("return value using call method:"+result2);
// }

// {
//     function product(a,b){
//         return a-b;
//     }

//     let result1=product(8,5);

//     console.log("return value without using call method:"+result1);

//     let result2=product.call(this,8,5);

//     console.log("return value using call method:"+result2);
// }

// passing Object as this value in call()

{
    // const name={
    //     firstname:"riddhi",
    //     lastname:"vekariya",
    //     age:19,
    // };
    // function greet(){
    //     const string=`My name is ${this.firstname} ${this.lastname}. I am ${this.age} years old.`;
    //     console.log(string);
    // }
    // greet.call(name);
}

{
    // const name={
    //     firstname:"riddhi",
    //     lastname:"vekariya",
    //     age:19,
    //     place:"surat",
    // };
    // function greet(){
    //     const string=`My name is ${this.firstname} ${this.lastname}. I am ${this.age} years old. I live in ${this.place} city.`;
    //     console.log(string);
    // }
    // greet.call(name);
}

// Using call() to Chain Constructors

{
    // //function definition 
    // function Animal(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    
    // //function definition 
    // function Horse(name, age) {
    //     Animal.call(this, name, age);
    //     this.sound = "Neigh";
    // }
    
    // //function definition 
    // function Snake(name, age) {
    //     Animal.call(this, name, age);
    //     this.sound = "Hiss";
    // }
    
    // const horse1 = new Horse("Arnold", 8);
    // console.log(horse1.name, horse1.age, horse1.sound);

    // const snake1 = new Snake("Harry", 5);
    // console.log(snake1.name, snake1.age, snake1.sound);
    
}

// JavaScript Constructor Function

{
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }
    // const person = new Person(); 
}

// Create Multiple Objects with Constructor Function

{
    // // constructor function
    // function Person () {
    //     this.name = 'riddhi',
    //     this.age = 23,

    //     this.greet = function () {
    //         console.log('hello');
    //     }
    // }

    // // create objects
    // const person1 = new Person();
    // const person2 = new Person();

    // // access properties
    // console.log(person1.age);
    // console.log(person2.name);  
}

// javascript this keyworld

{
        // function person(){
        //     this.name='riddhi'
        //     this.age=21
        // }
        // const person1= new person();

        // console.log(person1.age);
        // console.log(person1.name);
        // console.log(person1.place);
}

// javascript constructer function parameter

{
    // function person(person_name,person_age,person_gender){
    //     this.name=person_name,
    //     this.age=person_age,
    //     this.gender=person_gender,

    //     this.greet=function(){
    //         return('hi'+' '+this.name);
    //     }
    // }

    // const person1= new person('riddhi',19,'female');
    // const person2= new person('riya',18,'female');

    // console.log(person1.age); //19
    // console.log(person2.gender); //female
}

// Adding Properties And Methods in an Object

{
    // function person(){
    //     this.name='riddhi',
    //     this.age=19
    // }
    
    // let person1=new person();
    // let person2=new person();

    // person1.gender='female';

    // person1.greet=function(){
    //     console.log('hello');
    // }

    // person.greet=function(){
    //     console.log('everyone');
    // }

    // person1.greet();

    // person2.greet();
}

// jvascript object prototype

{
    // function Person () {
    //     this.name = 'riddhi',
    //     this.age = 19
    // }

    // // creating objects
    // let person1 = new Person();
    // let person2 = new Person();  

    // // adding new property to constructor function
    // Person.prototype.gender = 'feMale';

    // console.log(person1.gender); 
    // console.log(person2.gender); 
}

// JavaScript Built-in Constructors

{
    // string

    // const name = new String ('riddhi');
    // console.log(name);

    // // number

    // const number = new Number (57);
    // console.log(number);

    // // boolean

    // const count = new Boolean(true);
    // console.log(count); // true
}