var maths=function(length,width,height){
    return length*width*height;
};
var volume=maths(2,3,4);
console.log(volume);

//2
function colorCar(x){
    
     console.log(`a ${x} color`);
    };
    colorCar("red");

//3
    
    function myHouse(type,age,size){
        this.type=type;
        this.age=age;
        this.size=size;
        console.log("My house is a  " + this.type + " and it is "+ this.age + " years.It's size "+ this.size +" .");
    
    };
     myHouse("flat",5,"big");
   
//4
var vehicleType=function(color,code){
    if(code===2){
        console.log(`a ${color} motorbike`);
    }
    else if(code===1){
        console.log(`a ${color} car`);
    }

};
vehicleType("blue",2);
//5
console.log(3===3);
console.log("yes it can be written without if..");

//6

var vehicle=function(color,code,age){
    if(code===2) {
        console.log(`a ${color} motorbike`);
    }
    else if(code===1 && age>0) {
        console.log(`a  used ${color} car`);
    }

};
vehicle("blue",1,5);

//7
var vehicles= ["motorbike", "caravan","bike"]; //We can make a list with an array.

//8
console.log(vehicles[2]);   

//12 an empty object
var emptyObj={}; 

//13 and 14
var teachers=[
    {name:"Philip Beau"},
    {name:"Ivana"},
    {name:"Frank"},
    {name:"Unmesh Joshi"},
    {name:"Jim"}

];
for(let i=0; i<teachers.length; i++){
    console.log("Name : "+teachers[i].name);
}
//14
var teachers=[
    {name:"Philip Beau",mod:"HTML-CSS"},
    {name:"Ivana",mod:"HTML-CSS"},
    {name:"Frank",mod:"Debugging"},
    {name:"Unmesh Joshi",mod:"Command line"},
    {name:"Jim",mod:"Javascript"}

];
for(let i=0; i<teachers.length; i++){
    console.log("Name : "+teachers[i].name+ " Lang : "+ teachers[i].mod);
}

//15
function foo(func) {
    bar();
    car();
}

function bar() {
    console.log('Hello, I am bar!');
}
function car() {
    console.log('Hello, I am car!');
}
foo(bar,car);

//16
let x = [1,2,3];
let y = [1,2,3];
let z = y;

if(x==y){
    console.log("x is equal to y");
    
} else{
    console.log("x is not equal to y");
}

if (x===y){
    console.log("x is equal to y");
} else{
    console.log("x is not equal to y");
}

if (z==y){
    console.log("z is equal to y ");
} else{
    console.log("z is not equal to y");
}
if (z==x){
    console.log("z is equal to x");
} else{
    console.log("z is not equal to x");
}

//17
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

if(o3==o2){             //As you see when we change the order, it gives the same result.That's why it doesn't matter.
    console.log(o2);
}
if(o2==o3){
    console.log(o3);
}

//





