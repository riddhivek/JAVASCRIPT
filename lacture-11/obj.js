// javascript Object

// the object type represents one of javascript's data type. it is used to store varius keyed collections and more complex entitis. Objects can be created using the objects() constructor pr the object initializer / literal syntex,.

// here is an javascript objec.

// object

// {
//     const student ={
//         firstName:'ram',
//         class: 10
//     };
//     console.log(student);
// }

// javascript object declaration

// {
//     const name ={
//         firstName:'radha',
//         secondName:'brida'
//     };
//     console.log(name);
// }

// javascript object creation

// {
//     const info ={
//         Name:'john',
//         Name2:'trisha'
//     };
//     console.log(typeof info);
// }

// javascript object properties

// In javascript, key:value pairs are called properties 

// Example

// {
//     const info ={
//         firstName:'john',     // firstName is key, john is value
//         age:20                // age is key, 20 is value
//     };
// }
// here firstName:'john and age:20 is properties

// Accessing object properties

// 1. USING DOT NOTATION

// syntex

// {
//     objectname.key
// }

// example

// {
//     const name ={
//         firstName:'riddhi',
//         age:18
//     };
//     console.log(name.age);
//     console.log(name.firstName);
// }

// {
//     const name ={
//         toys:'car',
//         waranty:2
//     };
//     console.log(name.waranty);
// }

// 2. USING BRACKET NOTATION

// {
//     const name ={
//         firstName:'riddhi',
//         age:18
//     };
//     console.log(name["age"]);
//     console.log(name["firstName"]);
// }

// {
//     const name ={
//         toys:'car',
//         waranty:2
//     };
//     console.log(name["waranty"]);
// }

// JAVASCRIPT NESTED OBJECT

// an object can also contain another object

// {
//     const name ={
//         firstName:'john',
//         age:20,
//         marks :{
//             scince:75,
//             math:68
//         }
//     }
//     console.log(name.marks);
//     console.log(name.marks.scince);
// }

// {
//     const student ={
//         firstName:'meera',
//         age:20,
//         marks :{
//             scince:70,
//             math:75
//         }
//     }
//     console.log(student.marks);
//     console.log(student.marks.scince);
// }

// JAVASCRIPT OBJECT METHOD

// 1. Javascript object assign

// assign() parameter

// the assign() method takes in:

// target
// sources

// {
//     const obj1={a:1};
//     const obj2={b:2};
//     const obj3={c:3};
//     const mergedobj=Object.assign(obj2,obj1,obj3);

//     // combine all the properties in 
//     // obj1,obj2,obj3 into singale object

//     console.log(mergedobj);
// }

// {
//     const obj1={a:1};
//     const obj2={b:5};
//     const obj3={c:8};
//     const obj4={d:2};
//     const mergedobj=Object.assign(obj1,obj2,obj3,obj4);

//     console.log(mergedobj);
// }

// assign() return value

// javascript object.assign() to clone objects
// {
//     const obj1={
//         firstname:"john",
//         age:20
//     };
//     let newObject={};

//     const copy=Object.assign(newObject, obj1);

//     console.log(copy);

//     // console.log(newObject);
// }

// {
//     const obj={
//         toys:"truck",
//         waranty:2
//     }
//     let newObject={};

//     const copy=Object.assign(newObject,obj);
//     console.log(newObject);
// };

// 2. javascript Object.create()

// {
//     let student={
//         Name:"lisa",
//         age:20,
//         marks:20.5,
//         display(){
//             console.log("Name:",this.Name);
//         }
//     };
//     let std1=Object.create(student);
//     std1.name="sheeran";
//     std1.display();
// }

// {
//     let name={
//         toys:"truck",
//         age:20,
//         waranty:2,
//         display(){
//             console.log("waranty:",this.waranty);
//         }
//     };
//     let std1=Object.create(name);
//     std1.toys="car";
//     std1.display();
// }

// 3. javascript object.entries()

// {
//     const obj={name:"adam",age:20,location:"nepal"};

//     console.log(Object.entries(obj));   
// }

// {
//     const name={name:"lisa",age:20,location:"India",marks:55};

//     console.log(Object.entries(name));
// }

// keys are arranged randomly

// {
//     const num={100: "a", 22: "b", 71: "c"};

//     console.log(Object.entries(num));
// }

// {
//     const obj={45:"b",55:"c",200:"g"};

//     console.log(Object.entries(obj));
// }

// entries() to iterate through key-value pairs

// {
//     const obj={name:"john",age:20,location:"nepal"};

//     for(const [key,value]of Object.entries(obj)){
//         console.log(`${key}:${value}`);
//     }
// }

// 4. Javascript object.is

// {
//     let obj={a:1,b:5};
//     console.log(Object.is(obj,obj));
// }


// {
//     console.log(Object.is("Javascript","javascript"));
//     console.log(Object.is("Javascript","Javascript"));
// }

// {
//     console.log(Object.is("riya","Riya"));
// }


// {
//     // is() with custome objects

//     let obj1={a:1};
//     let obj2={b:1};

//     console.log(Object.is(obj1,obj1));
//     console.log(Object.is(obj1,obj2));
// }

// is() with special case

// {
//     console.log(Object.is([], []));  

//     console.log(Object.is(0, -0));  

//     console.log(Object.is(-0, -0)); 

//     console.log(Object.is(NaN, 0/0));  
// }


// 5. javascript object.hasownproperty()

// {
//     const obj={};
//     obj.id=45;
//     console.log(obj);

//     console.log(obj.hasownproperty("id"));
// }

// {
//     const obj = {id: 42 , toString:10 , name:"john"};
//     console.log(obj.hasOwnProperty("id")); 
//     console.log(obj.hasOwnProperty("name")); 
//     console.log(obj.hasOwnProperty("toString")); 
// }

// 6. javascript Object.freeze

// {
//     let obj={
//         foo:"bar",
//         new_foo:"one"
//     };
//     let o= Object.freeze(obj);
//     let p= Object.freeze(obj);

//     obj.foo = "bar1";
//     console.log(obj.foo); 

//     obj.new_foo = "bar";
//     console.log(obj.new_foo); 
// }

// 7. javascript object.getownpropertynames()

// {
//     const obj = {
//         firstname:'radha',
//         age:20,
//         address:'nepal',
//     };
//     const propertynames=Object.getOwnPropertyNames(obj);
    
//     console.log(propertynames);
// }

// 8. javascript Object.setPrototypeOf()

// {
//     const obj={};

//     const parant ={foo:'bar'};
//     const parant1 ={foo:'bars'};

//     Object.setPrototypeOf(obj,parant1);

//     console.log(obj.foo);
// }