// var person = ["Adam Arthur Alexis Jonsson", 18, "unknown"];
// console.log(person[2]);

// var person2 = [99, "skellefteå", "Lindh0lm"]
// console.log(person2[1]);

// var person = {
//     name: "Riccard", // key value pair
//     age: 18,
//     hometown: "Dorotea"
// };


// retrive data from object
// console.log("The cool boi is", person.name);

// console.log("He was just a peasant at the age of", person.age);
// person.age += 1;
// console.log("But was worshipped like a god when he turned", person.age);

// console.log("So he decided to move from", person.hometown);
// person.hometown = "Hell";
// console.log("To", person.hometown);

// make an empty object and assign key/value pairs to is
// var oddNums = {};
// oddNums.int = 1;
// oddNums.str = "one";
// oddNums.isOdd = true;

// all at once

// var dragon = {
//     name: "Paarthunax",
//     breed:"Horntailed Fangboi",
//     age: 9999,
//     isFriendly: true
//     isWiseBoi: true
// };

// var santasSleigh = new Object();
// santasSleigh.name = "Snabb-sate";
// santasSleigh.breed = "Norwegian Oak";
// santasSleigh.age = 9999999;
// santasSleigh.canFly = true;

// objects can hold all sort of data
// var junkObject = {
//     name:  "Me :(",
//     age:  18,
//     color: "Black as my Soul",
//     isSad: true,
//     friends: ["no one", "myself?", "none"],
//     pet: {
//         name: "Ackemo",
//         species: "Dead fish",
//         age: 3
//     }
// }

// console.log(junkObject.pet.species);
// console.log(junkObject.friends[2]);
// console.log(junkObject.isSad);

// var posts = [
//     {
//         name: "Jonathan Arnfjell",
//         title: "Adulting is Hard",
//         comments: ["Good book, read"]
//     }, 
//     {
//         name: "Stephen Hawking",
//         title: "My weelchair is PIMPED XD",
//         comments: ["A wild look into the brightest mind..."]
//     }
// ];

// console.log(posts[1].comments[1]);
// for(var i = 0; i < posts.length; i++) {
//     console.log(posts[i].title, posts[i].name, posts[i].comments)
// }

// ********************************Uppgift*************************************
var movies = [
    {
        title: "La La Land",
        rank: "9/10 stars",
        seen: true
    },
    {
        title: "Avengers: Infinity war",
        rank: "7/10 stars",
        seen: true
    },
    {
        title: "Pleasantville",
        rank: "7,5/10 stars",
        seen: false
    }
]

movies.forEach(function(movie) {
    if (movie.seen == true) {
    console.log("The title is " + movie.title + ", it has a rating of " + movie.rank +" and you have seen it")
    }
    else{
        console.log("The title is " + movie.title + ", it has a rating of " + movie.rank +" and you have not seen it")
    }
});