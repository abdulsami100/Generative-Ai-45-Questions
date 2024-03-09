// 1
let name1: string = "Hello Eric";
console.log(`${name1} would you like to learn some python today?`);

// 2
let personName: string = "AbdulSami";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));

// Function to convert string to titlecase
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, (match: string) => {
        return match.toUpperCase();
    });
}

// 3
let quote: string = "A person who never made a mistake never tried anything new";
let author: string = "Albert Einstein";
console.log(author, "once said", quote);

// 4
let message: string = "A person who never made a mistake never tried anything new";
let famous_person: string = "Albert Einstein";
console.log(famous_person, "once said", message);

// 5
let nameWithWhitespace: string = "\t\n   John Doe \t\n"; // Example name with whitespace
console.log(`Name with whitespace: '${nameWithWhitespace}'`);
// Stripping whitespace using trim() method
let nameStripped: string = nameWithWhitespace.trim();
console.log(`Name stripped of whitespace: '${nameStripped}'`);

// 6
let addition: number = 5;
let addition1: number = 3;
let finaladdition: number = addition + addition1;

let multiplication: number = 2;
let multiplication1: number = 4;
let finalmultiplication: number = multiplication * multiplication1;

let division: number = 16;
let division1: number = 2;
let finaldivision: number = division / division1;
console.log(finaladdition, finalmultiplication, finaldivision);

// 7
let favoriteNumber: number = 2;
console.log(favoriteNumber);

// 8
let names: string[] = ["Aleem", "Wasay", "Jawwad", "Waleed"]; // Array of friend names
// Printing each person's name
names.forEach((name: string) => {
    console.log(name);
});

// 9
let friendNames: string[] = ["Aleem", "Wasay", "Jawwad", "Waleed"]; // Array of friend names
friendNames.forEach((name: string) => {
    console.log(`Hello, ${name}! Have a great day!`);
});

// 10
let bicycleExamples: string[] = ["mountain bike", "road bike", "commuter bike"];
bicycleExamples.forEach((bicycle: string) => {
    console.log(`I would like to own a ${bicycle}.`);
});

// 11
let guestName1: string = "friend";
let guestName2: string = "cousins";
let guestName3: string = "classmates";
let guestName4: string = "Khala";
let guestName5: string = "chachu family";
let guestName6: string = "Mamoo family";
let guestName7: string = "taya family";
console.log("I invite my",guestName1, "to dinner");
console.log("I invite my", guestName2, "to dinner");
console.log("I invite my", guestName3, "to dinner");
console.log(`Due to some emergency, ${guestName3} cannot arrive, so I invite my ${guestName4} to dinner`);
console.log("All of a sudden I found a bigger dining table for dinner, which means I have more space, so I would also like to invite", guestName5, guestName6, guestName7, "for dinner");

// 12
console.log("Unfortunately, the table cannot arrive timely so I can just invite two guests, apologies to everyone");
console.log("Apologies from my side to my", guestName7, guestName6, guestName5, guestName4, "and", guestName3);
console.log("My", guestName1, "and", guestName2 , "you're still invited");

// 13
// Array of places to visit
let placesToVisit: string[] = ["Japan", "Italy", "New Zealand", "Egypt", "Canada"];
// Print original array
console.log("Original Order:");
console.log(placesToVisit.join(", "));

// Print array in alphabetical order
console.log("Alphabetical Order:");
console.log([...placesToVisit].sort().join(", "));

// Show original order
console.log("Original Order:");
console.log(placesToVisit.join(", "));

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit.join(", "));

// 14
// Define an array of countries
let countries: string[] = ["USA", "Canada", "Brazil", "India", "China", "Germany", "Australia"];
// Print the countries
console.log("List of countries:");
for (let country of countries) {
    console.log(country);
}

// 15
// Define car objects
interface Car {
    make: string;
    model: string;
    year: number;
    color: string;
}

let car1: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver"
};

let car2: Car = {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Blue"
};

let car3: Car = {
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "Red"
};

let car4: Car = {
    make: "Toyota",
    model: "Supra",
    year: 2010,
    color: "Red"
};

// Information about the cars
console.log("Car 1:");
console.log("Make:", car1.make);
console.log("Model:", car1.model);
console.log("Year:", car1.year);
console.log("Color:", car1.color);
console.log();

console.log("Car 2:");
console.log("Make:", car2.make);
console.log("Model:", car2.model);
console.log("Year:", car2.year);
console.log("Color:", car2.color);
console.log();

console.log("Car 3:");
console.log("Make:", car3.make);
console.log("Model:", car3.model);
console.log("Year:", car3.year);
console.log("Color:", car3.color);
console.log();

console.log("Car 4:");
console.log("Make:", car4.make);
console.log("Model:", car4.model);
console.log("Year:", car4.year);
console.log("Color:", car4.color);
console.log();

// 16
let aa: number = 5;
let bb: number = 10;
let cc: number = 2;
let dd: number = 4;
let ee: number = 3;

// Test 1, check if a is less than b or not
if (aa < bb) {
    console.log("result: True");
} else {
    console.log("result: false");
}

// Test 2 lets check if variable is = 10
let vv: number = 10;
if (vv === 10) {
    console.log("result: True");
} else {
    console.log("Result: False");
}

// Test 3 lets check if aa + bb is equals to 15
if (aa + bb === 15) {
    console.log("result: True");
} else {
    console.log("Result: False");
}

// Lets check if if ee + dd = 7
if (ee + dd === 7) {
    console.log("result: True");
} else {
    console.log("result: False");
}

// Lets check if dd * cc = 8
if (dd * cc === 8) {
    console.log("result: True");
} else {
    console.log("result: False");
}


//All True Aspects done, as per assignment,now false conditions
if(dd * ee===14) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
if(bb + cc===17){
    console.log("result: True");
}
else {
    console.log("result: False");
}

if(bb * ee===32){
    console.log("result: True");
}
else {
    console.log("result: False"); 
}

if(bb / cc ===4) {
    console.log("result: True");
    
}
else{
    console.log("result: False");
}

if(bb * dd===39) {
    console.log("result: True");
    
}
else {
    console.log("result: False");
}
//All conditions of True and False are done

//17 Alien color

const alien_color: String = "red"
if(alien_color==="green") {
console.log("result: Player just earned 5 points.");
}
else {
    console.log("result: no output");
    
}
//both results coming 
//18
const alien_color2:string = "green"
if(alien_color2==="green") {
    console.log("result: Player just earned 5 points");
}
else {
    console.log("result: Player just earned 10 points");
}
let alienColor: string = "green";

if (alienColor === "green") {
    console.log("The player earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
} else {
    console.log("The player earned 15 points.");
}

//19
let alienColor1: string = "green";

if (alienColor1 === "green") {
    console.log("The player earned 5 points.");
} else if (alienColor1 === "yellow") {
    console.log("The player earned 10 points.");
} else {
    console.log("The player earned 15 points.");
}

//20
let alienColor3: string = "red";

if (alienColor3 === "green") {
    console.log("The player earned 5 points.");
} else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points.");
} else {
    console.log("The player earned 15 points.");
}
//21
let ageAge: number = 25;

if (ageAge < 2) {
    console.log("The person is a baby.");
} else if (ageAge >= 2 && ageAge < 4) {
    console.log("The person is a toddler.");
} else if (ageAge >= 4 && ageAge < 13) {
    console.log("The person is a kid.");
} else if (ageAge >= 13 && ageAge < 20) {
    console.log("The person is a teenager.");
} else if (ageAge >= 20 && ageAge < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//22
let usernames: string[] = ["admin", "Alice", "Bob", "Charlie", "David"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello", username, "thank you for logging in again.");
    }
}

//23
let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users: string[] = ["user3", "user6", "user7", "user8", "user9"];

for (let new_user of new_users) {
    if (current_users.indexOf(new_user) !== -1) {
        console.log("The username", new_user, "is not available. Please enter a new username.");
    } else {
        console.log("The username", new_user, "is available.");
        current_users.push(new_user); // Add the new username to the list of current users
    }
}


//24
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinalEnding: string;

    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(number, ordinalEnding);
}
//25
let favoritePizzas: string[] = ["Margherita", "Pepperoni", "BBQ Chicken"];

for (let pizza of favoritePizzas) {
    console.log(pizza);
}


//26
//  a list of animals with a common characteristic
const animals: string[] = ["dog", "cat", "rabbit"];

//name of each animal using a for loop
console.log("Names of the animals:");
for (let animal of animals) {
    console.log(animal);
}

//statement about each animal
console.log("Statements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case "dog":
            console.log("A dog would make a great pet.");
            break;
        case "cat":
            console.log("A cat would be a good companion.");
            break;
        case "rabbit":
            console.log("A rabbit is a lovely and playful pet.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}

console.log("Any of these animals would make a great pet!");


//27
// T-Shirt
function make_shirt(size: string, message: string): void {
    console.log("Shirt size: " + size + ", Message: " + message);
}

make_shirt("Large", "Hello, world!");

// Large Shirts
function make_shirt_default(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log("Shirt size: " + size + ", Message: " + message);
}

make_shirt_default(); // Large shirt with default message
make_shirt_default("Medium"); // Medium shirt with default message
make_shirt_default("Small", "Custom message"); // Custom size and message

// Cities
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(city + " is in " + country + ".");
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// City Names
function city_country(city: string, country: string): string {
    return city + ", " + country;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("London", "UK"));

// Album
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 12));
console.log(make_album("Artist3", "Album3", 8));

// Magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ["Magician1", "Magician2", "Magician3"];
show_magicians(magicians);

// Great Magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

const great_magicians: string[] = make_great(magicians.slice()); // create a copy to avoid modifying the original array
show_magicians(great_magicians);

// Unchanged Magicians
const unchanged_magicians: string[] = magicians.slice();
const new_magicians: string[] = make_great(magicians.slice());
show_magicians(unchanged_magicians);
show_magicians(new_magicians);

// Sandwiches
function make_sandwich(...items: string[]): void {
    console.log("Sandwich ordered with:");
    for (let item of items) {
        console.log("- " + item);
    }
}

make_sandwich("bread", "cheese", "tomato");
make_sandwich("bread", "ham");
make_sandwich("bread", "lettuce", "mayonnaise", "turkey");

//Completed my assignment Alhamdulliah! whereever i felt the need to go through resources to
//understand the concepts,i looked upon youtube, chatgpt to clear out my basic mistakes, tried my level best 
//to accomplish every result. stay bless my teachers and every single one of them who look upon this code.
//God bless you all!