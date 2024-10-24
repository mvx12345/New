let fruit="apple";
const flower= "rose"
var food="Burger";

console.log(fruit,flower,food)

fruit="mango"
//flower="sunflower"
food="pizza"

console.log(fruit,flower,food)

let a=4;

if (a<5){
    console.log(a,"is less than 5")
}
else{
    console.log(a,"is greater than 5")
}
let i
range=[1,2,3,4,5]
let sum=0
for( i in range){
    sum= range[i]+sum
    
} 
console.log(i)
console.log('sum',sum)
i=0
while (i<2){
    console.log("hello", i)
    i++
}

function addition(a,b){
    console.log( a+b)
}

const add =(a,b) => console.log(a+b)

addition(10,5)
add(10,5)
