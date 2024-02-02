// javascript setTimeout()

// display a text once after 4 seconds

{
    // function greet(){
    //     console.log('Hello i am riddhi');
    // }
    // setTimeout(greet,4000);
}

// The setTimeout() method returns the interval id. 

{
    // function greet(){
    //     console.log('Hello i am riddhi');
    // }
    // let intervalId=setTimeout(greet,1000);
    // console.log('Id: '+intervalId);
}

// Display Time Every 3 Second

{
    // function showTime(){
    //     let datetime=new date();

    //     let time=datetime.toLocalTimeString();

    //     console.log(time)

    //     setTimeout(showTime,1000);

    //     showTime();
    // }
}

// The syntax of clearTimeout() method is

{
    // clearTimeout(intervalID);
}

{
    // let count=50;

    // function increaseCount(){
    //     count+=1;
    //     console.log(count)
    // }

    // let id = setTimeout(increaseCount, 3000);

    // clearTimeout(id);
    // console.log('setTimeout is stoped');
}

// you can also pass additinal argument to the setTimeout() method.

{
    // setTimeout(function,milliseconds,parameter1,...parameter2)    
}

{
    // function greet(name,lastname){
    //     console.log('hello'+' '+name+' '+lastname);
    // }
    // setTimeout(greet, 1000, 'riddhi','vekariya');
}

{
    // function greet(name,age){
    //     console.log('hello'+' '+name+' '+age+' '+'year old');
    // }
    // setTimeout(greet,2000,'riddhi',19)
}

// javascript callback fuction

{
    // function greet(name,age){
    //     console.log('hello'+' '+name+' '+age+' '+'year old');
    // }
    // greet('riddhi',19);
}

// program with settimeout

{
    // function greet(){
    //     console.log('hello everyone');
    // }
    // function sayname(name){
    //     console.log('hello'+' '+name);
    // }
    // setTimeout(greet,3000);
    // sayname('riddhi');
}

// javascript Promise and Promise chaining

// promise have a three staps
// 1.pedding
// 2.fulfilled
// 3.rejected

// create a Promise

{
    // let promise=new Promise(function(resolve,reject){
        // do somthing
    // })
}

// {
//     const count=true;

//     let countValue=new Promise(function(resolve, reject){
//         if(count){
//             resolve("There is a count value");
//         }
//         else
//         {
//             reject("there is no count value");
//         }
//     });
//     console.log(countValue);
// }

// the syntex of them() method is

{
    // PromiseObject.then(onfulfilled,onrejeccted);
}

{
    // let countValue=new Promise(function(resolve, reject){
    //     resolve("promise resolved")
    // });
    // countValue
    //     .then(function successValue(result) {
    //         console.log(result);
    //     })

    //     .then(function successValue(){
    //         console.log("you can call multiple function this way.");
    //     });
}

// javascript catch method

{
    // let countValue = new Promise(function (resolve, reject) {
    //     reject('Promise rejected'); 
    // });

    // countValue.then(
    //     function successValue(result) {
    //         console.log(result);
    //     },
    // )

    // .catch(
    //     function errorValue(result) {
    //         console.log(result);
    //     }
    // );
}

// JavaScript finally() method

{
    // let countValue = new Promise(function (resolve, reject) {

    //     resolve('Promise resolved'); 
    // });

    // countValue.finally(
    //     function greet() {
    //         console.log('This code is executed.');
    //     }
    // );
}