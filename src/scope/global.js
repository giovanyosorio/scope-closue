//variables

var a// declarar
var b="b" //declaramos y asignamos

b="bb"// reasignando

var a="aa" //re declaracion



//global scope

var fruit="apple" //global

function bestFruit(){
    console.log(fruit);
}

bestFruit()


function countries() {
   const  country="colombia" //global
    console.log(country);
}

countries()
console.log(country);