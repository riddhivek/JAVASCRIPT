// javascript function apply

// apply() syntex

{
    // func.apply(thisArg,argsArray)
}

// 1: apply() method to call function

{
    // const personName = {
    //     firstName:"riddhi",
    //     secondName:"vekariya",
    // };

    // function greet(wish,message){
    //     return `${this.firstName}, ${wish}, ${message}`;
    // }

    // let result=greet.apply(personName,["GOOD MORNING" ,  "HOW ARE YOU"]);

    // console.log(result);
}
{
    // const toyname={
    //     firstName:"truck",
    //     secondName:"bus",
    // };

    // function greet(wish,message){
    //     return `${this.firstName},${wish},${message}`;
    // }

    // let result=greet.apply(toyname,["play","today"]);

    // console.log(result);
}

// 2:apply() for function borrowing

{
    // const car={
    //     name:"swift",
    //     description(){
    //         return `The ${this.name} is of ${this.color} color`;
    //     },
    // };

    // const bike={
    //     name:"shine",
    //     color:"black",
    // };

    // let result=car.description.apply(bike);

    // console.log(result);
}

// 3: apply() to append two arrays  

{
    // let num1=["1","2","3","4"];
    // let num2=["5","6","7"];

    // let x= num1.push.apply(num2,num1);

    // console.log(num2);
}

// 4:  using apply() with built-in function

{
    // const numbers=[100,5,85,12,5,4,8];

    // let max =Math.max.apply(null,numbers);

    // console.log(max);

    // let max1=Math.max(10,56,26,89);

    // console.log(max1);;
}

{
    // function sum(){
    //     let sum=0;
    //     for(let i=0;i<arguments.length;i++){
    //         sum+=arguments[i];
    //     }
    //     return sum;
    // }
    // const result=sum.apply(null,[2,5,2,5,5]);

    // console.log(result);
}

{
    // function sub(){
    //     let sub=0;
    //     for(let i=0;i<arguments.length;i++){
    //         sub-=arguments[i];
    //     }
    //     return sub;
    // }
    // const result=sub.apply(null,[5,2]);

    // console.log(result);
}

{
    // function div(){
    //     let div=0;
    //     for(let i=0;i<arguments.length;i++){
    //         div/=arguments[i];
    //     }
    //     return div;
    // }
    // const result=div.apply(null,[10,5]);

    // console.log(result);
}