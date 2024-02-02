// JAVASCRIPT STRING METHOD

// string length
// string slice()
// string substring()
// string substr()
// string replace()
// string replaceall()
// string touppercase()
// string tolowercase()
// srting concate()
// string trim()
// string trimstart()
//string trimend()
//string padstart()
//string pad end()
//string charcodeAtat()
// String split()
// string includes()

// string length()

// {
//     let text="this is check the length";
//     let length=text.length;
//     document.write(length);
// }

// string slice

// {
    // let fruits="apple , mango , banana";
    // let part=fruits.slice(18,20);
    // document.write(part);
// }

// string substring()

// {
    // let fruits="apple , banana , mango";
    // let part=fruits.substring(5,10);
    // document.write(part);
// }

// string substr()

// {
    // let fruits="apple, banana,kiwi,mango";
    //             // 1234567899876543651;
    // let part=fruits.substr(2,10);
    // document.write(part);
// }

// string replace()

// {
//     function myfunction(){
//         let text = document.getElementById("para-1").innerHTML;
//         document.getElementById("para-1").innerHTML=text.replace ("visit","skillqode");
//     }
// }
// {
//     let text="please visit microsolllp";
//     let change=text.replace(/microsolllp/i,"skillqode");
//     document.write(change);
// }
// {
//     let text="please visit skilqode visit and visit again";
//     let change=text.replace(/visit/g,"come");
//     document.write(change);
// }

// string replaceall

// let text="I Love cats. but cats are very easy to love. cats are very populer. but cats are dangerous.";
// let change=text.replaceAll("cats","dogs");
// let changes=text.replaceAll("Cats","Dogs");
// document.write(change+changes);
// document.write(change);

// string touppercase

// let text="I Love cats. but cats are very easy to love. cats are very populer. but cats are dangerous.";
// let text1=text.toUpperCase();
// document.write(text1);

// string toLowerCase

// let text="I Love cats. but cats are very easy to love. cats are very populer. but cats are dangerous.";
// let text1=text.toLowerCase();
// document.write(text1);

// string concat()

// {
    // let text1="Darshan";
    // let text2="korat";
    // let text3=text1.concat(" ",text2);
    // let text4=text3.length;
    // document.write(text3);
    // document.write(text4);
// }

// String trim()

// {
//     let demotext="              this is javascript              ";
//     let demo=demotext.trim();
//     document.write(demo);
// }

// string trimstart

// {
//     let demotext="              this is javascript              ";
//     let demo=demotext.trimStart();
//     document.write(demo);
// }

// string trimend

// {
    // let demotext="              this is javascript              ";
    // let demo=demotext.trimEnd();
    // document.write(demo);
// }

// string padstart()

// {
    // let demotext="5";
    // let demo=demotext.padStart(5,"0");
    // document.write(demo);
// }

// string padend()

// {
    // let demotext="7";
    // let demo=demotext.padEnd(8,"0");
    // document.write(demo);
// }

// string charat

// {
    // let demotext="this is string values";
    // let demo=demotext.charAt(15);
    // document.write(demo);
// }

// string charcodeat

// {
    // let demotext="this is string values";
    // let demo=demotext.charCodeAt(10);
    // document.write(demo);
// }

// string split()

// {
    // let text="Hello";
    // let myArr=text.split("");

    // text="";
    // for(let i=0;i<myArr.length;i++)
    // {
    //     text+=myArr[i] + "<br>"
    // }
    // document.write(text);
// }