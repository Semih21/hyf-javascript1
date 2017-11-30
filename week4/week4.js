//1.First way
let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(number =>  number % 2 !== 0  
).map(number => number * 2);
console.log(newNumbers);

/*second way
let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(number => number % 2 !== 0
);
console.log(newNumbers);
let doubledNumbers = newNumbers.map(number => numbers * 2);
console.log(doubledNumbers);*/

//2
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday); // to merge two arrays
let duration_in_hour = tasks.map(task => task.duration / 60);  // to change minutes into hour.
 console.log(duration_in_hour);

let longTime = tasks.filter(task => task.duration >= 120);  // to filter out everything that takes two hours or more
console.log(longTime);

let earnedMoney = duration_in_hour.map(euro => euro * 50); // She earns 50 Euro per hour .That's why it is multiplied by 50.
let sum = earnedMoney.reduce(function(previous, current){
    return previous + current;
});
console.log(`if Maartje earns 50 Euro per hour , she will earn  totally ${sum} euro`);


