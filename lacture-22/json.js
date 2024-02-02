// javascript and json

// json syntex

{
    // {
        // "name":"riddhi",
        // "age":19,
        // "gender":"female",
    // }
}



// json data

{
    // JSON data
    // "name":"riddhi"
}

// JSON object

{
    // JSON Object
    // {
    //     {"name":"john","age":19}
    // }
}

// JSON Array

{
    // // JSON Array
    // ["apple","mango","banana"]

    // // JSON Array conteining object
    // [
    //     {"name":"riddhi","age":19},
    //     {"name":"peter","age":18},
    //     {"name":"john","age":20}
    // ]
}

// assining JSON data

{
    // const data={
    //     "name":"riddhi",
    //     "age":19,
    //     "place":"surat",
    //     "hobby":{
    //         "reading":true,
    //         "music":false,
    //         "sport":"chess"
    //     },
    //     "class":["javascript","html","css"]
    // }
    // console.log(data.name); // riddhi
    // console.log(data.place); // surat

    // console.log(data.hobby.music); // false
    // console.log(data.class[1]);  // html
}

// . notetion

{
    // const data={
    //     "name":"riddhi",
    //     "age":19,
    // }
    // console.log(data["age"]);
    // console.log(data["name"]);
}

// built-in JSON.parse()

{
    // const data='{"name":"riddhi","age":19}';
    
    // const obj=JSON.parse(data);

    // console.log(obj.name); // riddhi
    // console.log(obj.age); // 19
    // console.log(obj.place); //undifine
}

// converting javascript object to JSON

{
    // const jsondata={name:"riddhi",age:19}

    // const obj=JSON.stringify(jsondata);

    // console.log(obj); // {"name":"riddhi","age":19}
    // console.log(obj.age); // undifine
}