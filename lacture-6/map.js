// javascript map mathod

// new map()
// set()
// get()
// delete()
// has()
// entires()
// property
// size

// methods

// {
//     const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
//     document.getElementById("new").innerHTML = Data.get("option-4")
// }

// {
//     // the set() method can also be used to change existing Map calues
    
//     const newmap = new Map();

//     newmap.set("item-1" , "car"); 
//     newmap.set("item-2" , "toys"); 
//     newmap.set("item-3" , "computer"); 

//     document.getElementById("set1").innerHTML =newmap.get("item-1");
// }


//  

// The size property returns the number of elements in a Map

// {
//     const Data=new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-5" , 100],
//         ["option-4" , 80]
//     ]);
//     const sizes=Data.size;
//     document.getElementById("size").innerHTML=sizes;
// }

// The delete() method removes a Map element 

// {
//     const newmap = new Map([
//         ["option-1","car"],
//         ["option-2","bus"],
//         ["option=3","truck"]
//     ]);

//     const deletes = newmap.delete("item-2");
//     document.getElementById("deletes").innerHTML =deletes;
//     document.getElementById("deletes1").innerHTML =newmap.size;
// }

// The has() method returns true if a key exists in a Map 

// {

//     const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-5" , 100],
//         ["option-4" , 80]
//     ]);
//     const hass=Data.has("option-1");
//     document.getElementById("size1").innerHTML=hass;

//     const hasss=Data.has("option-5");
//     document.getElementById("size2").innerHTML=hasss;

// }


// {
//     const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
    
//     Data.delete("option-5");

//     const hasss = Data.has("option-5");
//     document.getElementById("has1").innerHTML =hasss;
//     document.getElementById("size3").innerHTML =Data.size;
// }

// FOREACH()

// {
//     const newmap=new Map([
//         ["item-1" , "car"],
//         ["item-2" , "bus"],
//         ["item-3" , "truck"]
//     ]);
//     let mapitem="";

//     for(const x of newmap.entries()){
//         mapitem+=x+"<br>";
//     }
//     document.getElementById("element").innerHTML=mapitem;
// }