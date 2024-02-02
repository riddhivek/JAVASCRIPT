// DOM-Document Object Model

// selecting elements

// getelementById() = select an elment by id
// getElementByTagName() = select elements by tag name
// getElementByClassname() = select elements by one or more class name
// quaryselector() = select elements by css selectors.

// javascript getelementbyid

{
    // function findElement(){
    //     const element=document.getElementById("id1");
    //     element.innerHTML="Element found!";
    // }

    // const node1 = document.getElementById("id2");
    // const node2 = document.getElementById("id3");
    // function textNode1(){
    //     alert(node1.innerHTML);
    // }
    // function textNode2(){
    //     alert(node2.innerHTML);
    // }
}

// javascript getelementbytagname()

{
    // const elements = document.getElementsByTagName("div");
    // console.log(elements);

    // function changeColor() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "red";
    //   }
    // }
}

// javascript getelementbyclassname()

{
    // const elements= document.getElementsByClassName("blue");
    // console.log(elements);

    // function changeColor(){
    //     for(i=0;i<elements.length;i++){
    //         elements[i].style.color="blue";
    //     }
    // }
}

// quarySelector()

{
    // const element=document.querySelector(".demo");
    // console.log(element);

    // function changeColors(){
    //     element.style.color="red";
    // }
}

// quarySelectorall()

{
    // const elements = document.querySelectorAll("#sun p");
    // console.log(elements);

    // function changeColorss() {
    //   for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.color = "blue";
    //   }
    // }
}

// javascript has attributs

{
    // const element=document.querySelector("p");
    // function check(){
    //     if(element.hasAttribute("name")){
    //         alert("yes 'name' attributs exist!");
    //     }
    //     else{
    //         alert("no 'name' attributs doss't exist!")
    //     }
    // }
}

// javascript get attributs

{
    // function attr(elem){
    //     alert(elem.hasAttribute("id"));
    // }
}

// javascript set attributs

{
    // const element=document.querySelector("p"); 

    // function checkAttr(){
    //     alert(element.hasAttribute("name"));
    // }

    // function addAttr(){
    //     element.setAttribute("name","myparagraph");
    // }
}

// javascript remove attributs

{
    // const element=document.querySelector("button");

    // function remove(){
    //     element.removeAttribute("title");
    // }
}

{
    // const element = document.querySelector("button");

    // function remove() {
    //   element.removeAttribute("title");
    // }
}

// HTML object accessible

/*
document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
}

{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
    // document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    // document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
}

{
    // document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
}

{
    // document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    // document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
}