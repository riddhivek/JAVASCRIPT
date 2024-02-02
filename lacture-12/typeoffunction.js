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
    let myfunction=(arg1, arg2, ...argN)=>{
        statement(s)
    }
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
    // let age=20;
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