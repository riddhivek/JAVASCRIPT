// javascript functionand function expression

/*

    A functions is a block of code that perform a specific task.
    
    Suposs you need to create a program to create a circle and color it. ypu can create two functions to solve this problem:

    a functios to draw the circle

    a function to color the circle

    Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

    Javascript also has a huge number of inbuilt function. For example, Math.sqrt() is a function to calculate the root of a number.

*/

{
    // declaration a function
    function nameofFunction (){
        // function body
    }
}

// A function is declared using the function keyword.
// The basic rules of naming a function  are similer to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addnumbers.
// The body of function is written within{}.

{
    // // declaring a function named and greet()
    // function greet(){
    //     console.log("hello there i am riddhi");
    // }
    // greet();
}

// 1. function parameters

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

{
    // // function with parameters
    // // program to print the text
    // // declaring a function

    // function greet(name){
    //     console.log("hy i am"+name+":)");

    //     let name= prompt("enter a name:");
    // }
    // greet(name);
}

// 2. add two number

{
    // // program to add two numbers using a function
    // // declaring the function
    // function add(a,b){
    //     console.log(a+b);
    // }

    // add(5,8);
    // add(8,4);
}

// 3. function Return

// The return statement can be used to return the value to a function cell.

// the return statement denotes that the function has ended. Any code for after return is not executed.Any

// If nothing is returned, the function returns an undefined value.

{
    // // Sum of two Numbers

    // function add(a,b){
    //     return a+b;
    // }
    // let number1 = parseFloat(prompt("Enter first number: "));
    // let number2 = parseFloat(prompt("Enter second number: "));

    // let result = add(number1,number2);

    // console.log("the sum is "+ result);
}

/*   Benefits of Using a Function   */

// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.

// 4. Function Expressions

{
    // let x = function(num){ return num*num };
    // console.log(x(4));

    // let y = x(3);
    // console.log(y);
}