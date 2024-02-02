// JAVASCRIPT STRING METHOD

// string indexof()
// string lastIndex()
// string search()
// string match()
// string matchAll()
// string includes()
// string startwith()
// string endwith()


/**********    String Method     ************/

// String indexof()

// {
//     let name="riya,maya,ruhi,rutvi,nitya";
//     let part=name.indexOf("h");
//     console.log(part);
// }

// string lastindexof()

// {
//     let name="riya,maya,ruhi,rutvi,nitya";
//     let part=name.lastIndexOf("m",7);
//     console.log(part);
// }

// string search()

// {
//     let fruits="javascript is 'most' populer language";
//     let part= fruits.search("most");
//     console.log(part);
// }

// {
//     let fruits="javascript is 'most' populer language";
//     let part=fruits.search(/language/i);
//     console.log(part);
// }

// string match

// {
//     let text = "this is javascript match method";
//     let part = text.match(/q/);
//     console.log(text);
//     console.log(text.length);
// }


// string matchall()

// {
//     const regexp=/is/g;
//     const str="this is javascript";
//     const array=[...str.matchAll(regexp)];
//     console.log(array[0]);
//     console.log(array[1]);
// }

// {
//     let text="this is javascript match is method";
//     let part=text.matchAll(/is/g);
//     console.log(part);
// }

// String startswith()

// {
//         let text="hello world, welcome to universe ";  
//         let part=text.startsWith("world");   // false
//         console.log(part);
// }

// string endwith

// {
//     let text="hello world, welcome to the universe";
//     let part=text.endsWith("universe",50);
//     console.log(text);
// }

// javascript templet literals

            // black-Tic syntax
// {
//     let text = `hello world!`;
//     console.log(text);
// }

//         // quotes inside string

// {
//     let text=`he's name is 'joe'`;
//     console.log(text);
// }

// // allow multiline string

// {
//     let text="this is infinite pages";
//     console.log(text);
// }