// Model asingel person

var person = ["Hellboi", 31, "Piteå"];

// Retrive data

// hometown
console.log(person[2]);

// Reverse order of data.
var person2 = [999, "Lycksele", "William"];

// hometown
console.log(person2[2]);

// To model a person is the perfect use case for an objekt
var person = {
    name: "ADAM", //key:value pair
    age: 18,
    hometown: "Adams hem"
};

// Note: No index 

console.log(person.name);

person.age += 1;

// Different methods of initializing objects
var oddNums = {};
oddNums.int = 1;
oddNums.str = "one";
oddNums.isOdd = true;

//All lat ones
var dog = {
    name: "Doggo",
    breed: "Chihuahua",
    age: "3,141592653",
}

var cat = new Object();
cat.name = "Svenne";


var junkObject = {
    name: "Junk",
    age: 33,
    friends: ["Saruman", "Zelda"],
    pet: {
        name: "Leg",
        age: 69,
    }
}

console.log(junkObject.pet.name);
console.log(junkObject.friends[1]);

var posts = [{author: "Isak", title: "Leg", comments: ["Wow!", "Dab"]}, 
{author: "Jonis", title: "Spel", comments: ["1337!"]}];

console.log(posts[1].comments[0])

for(var i = 0; i < posts.length; i++) {
    console.log(posts[i].title, posts[i].author, posts[i].comments)
}

// Move DB

var movies = [
    {
        title: "La La Land",
        rating: "9.5/10",
        watched: "Yes",
    },
    {
        title: "Titanic",
        rating: "8/10",
        watched: "Yes",
    },
    {
        title: "The Room",
        rating: "0.3",
        watched: "Yes",
    }
];

