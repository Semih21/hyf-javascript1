//1.Write a console.log statement saying "Hello World!" for each language that you know.
const french="Bonjour,Le monde";
let english="Hello, World";
var turkish="Merhaba, Dunya";
const dutch="Hallo, Wereld"
console.log(french);
console.log(english);
console.log(turkish);
console.log(dutch);

//2.Consider the following code:console.log('I'm awesome');
console.log("I'am awesome");

//3.Declare a variable x and initialize it with an integer.
var x=1986;
console.log('the value of my x will be:1986')

//4.Declare a variable y and assign a string to it.
var y="my country";
console.log('the value my y string will be :my country');

//5.How do you round the number 7.25, to the nearest integer?
var z=7.25;
console.log(z);
var a =7;
console.log(a);
var result=Math.max(a,z);
console.log(result);

//6.Arrays
var emptyArray=[];
console.log(emptyArray);
console.log('the value of an empty array :[]');
var myFavoriteAnimals=['lion','horse'];
console.log(myFavoriteAnimals);
myFavoriteAnimals[2]='baby pig'; //first way to add a new element to an existing array is array[array length]='new element';
console.log(myFavoriteAnimals);
/*var array=['element1','element2'];
array.push('new element'); Second way to  add a new element 
console.log(array);*/


//7.More strings 
let myString = "this,is,a,test";
console.log(myString);
console.log(myString.length);

//8.Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
var a=27;                                                   
console.log('The value of my variable a is: ' + a);                         
var b="apple";                                             
console.log('The value of my variable b is: ' + b);                        
var c=['amsterdam','rotterdam'];                            
console.log('The value of my variable c is: ' + c);                                            
var d="orange" ;                                             
console.log('The value of my variable d is: ' + d);  

console.log('The type of my variable a is numeric ' );
console.log('The type of my variable b is string' );
console.log('The type of my variable c is array' );
console.log('The type of my variable d is string ' );
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
if (typeof(a)==typeof(b)){
    console.log("SAME TYPE");
}
else {
    console.log("NOT THE SAME TYPE");
}

//9.If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
var x=7;  //First example
x=x%3;
console.log(x);

var y=9;    //second examplee
var z=y%5;
console.log(z);

var a=5;     //third example
var b=a%3
console.log(b);

//10.1 Can you store multiple types in an array? Numbers and strings? 
var array=["student","teacher",23,true];
console.log(array);
console.log("Yes, we can store multiple types in an array");
if (6/0===10/0){
    console.log("true");
}
else{
    console.log("false");
}
console.log("I have understood well about these parts of the javascript so far");