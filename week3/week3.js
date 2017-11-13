//1.Strings! 
myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//without comma
myString = "hello,this is a difficult to read sentence";
console.log(myString);

//2.ARRAYS
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");   //Add a statement that adds Mauro's favorite animal (turtle) to the existing array
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');  //The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length); //Log the length of the array,

favoriteAnimals.splice(3, 1);   //Jason does not like giraffes, delete this animal from the array
console.log(favoriteAnimals);

console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat")); //Log the index of meerkat to the console. Add a message so it says: "The item you are looking for is at index: " 