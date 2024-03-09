var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1
var name1 = "Hello Eric";
console.log("".concat(name1, " would you like to learn some python today?"));
// 2
var personName = "AbdulSami";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));
// Function to convert string to titlecase
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
// 3
var quote = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log(author, "once said", quote);
// 4
var message = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstein";
console.log(famous_person, "once said", message);
// 5
var nameWithWhitespace = "\t\n   John Doe \t\n"; // Example name with whitespace
console.log("Name with whitespace: '".concat(nameWithWhitespace, "'"));
// Stripping whitespace using trim() method
var nameStripped = nameWithWhitespace.trim();
console.log("Name stripped of whitespace: '".concat(nameStripped, "'"));
// 6
var addition = 5;
var addition1 = 3;
var finaladdition = addition + addition1;
var multiplication = 2;
var multiplication1 = 4;
var finalmultiplication = multiplication * multiplication1;
var division = 16;
var division1 = 2;
var finaldivision = division / division1;
console.log(finaladdition, finalmultiplication, finaldivision);
// 7
var favoriteNumber = 2;
console.log(favoriteNumber);
// 8
var names = ["Aleem", "Wasay", "Jawwad", "Waleed"]; // Array of friend names
// Printing each person's name
names.forEach(function (name) {
    console.log(name);
});
// 9
var friendNames = ["Aleem", "Wasay", "Jawwad", "Waleed"]; // Array of friend names
friendNames.forEach(function (name) {
    console.log("Hello, ".concat(name, "! Have a great day!"));
});
// 10
var bicycleExamples = ["mountain bike", "road bike", "commuter bike"];
bicycleExamples.forEach(function (bicycle) {
    console.log("I would like to own a ".concat(bicycle, "."));
});
// 11
var guestName1 = "friend";
var guestName2 = "cousins";
var guestName3 = "classmates";
var guestName4 = "Khala";
var guestName5 = "chachu family";
var guestName6 = "Mamoo family";
var guestName7 = "taya family";
console.log("I invite my", guestName1, "to dinner");
console.log("I invite my", guestName2, "to dinner");
console.log("I invite my", guestName3, "to dinner");
console.log("Due to some emergency, ".concat(guestName3, " cannot arrive, so I invite my ").concat(guestName4, " to dinner"));
console.log("All of a sudden I found a bigger dining table for dinner, which means I have more space, so I would also like to invite", guestName5, guestName6, guestName7, "for dinner");
// 12
console.log("Unfortunately, the table cannot arrive timely so I can just invite two guests, apologies to everyone");
console.log("Apologies from my side to my", guestName7, guestName6, guestName5, guestName4, "and", guestName3);
console.log("My", guestName1, "and", guestName2, "you're still invited");
// 13
// Array of places to visit
var placesToVisit = ["Japan", "Italy", "New Zealand", "Egypt", "Canada"];
// Print original array
console.log("Original Order:");
console.log(placesToVisit.join(", "));
// Print array in alphabetical order
console.log("Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().join(", "));
// Show original order
console.log("Original Order:");
console.log(placesToVisit.join(", "));
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit.join(", "));
// 14
// Define an array of countries
var countries = ["USA", "Canada", "Brazil", "India", "China", "Germany", "Australia"];
// Print the countries
console.log("List of countries:");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log(country);
}
var car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver"
};
var car2 = {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Blue"
};
var car3 = {
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "Red"
};
var car4 = {
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
var aa = 5;
var bb = 10;
var cc = 2;
var dd = 4;
var ee = 3;
// Test 1, check if a is less than b or not
if (aa < bb) {
    console.log("result: True");
}
else {
    console.log("result: false");
}
// Test 2 lets check if variable is = 10
var vv = 10;
if (vv === 10) {
    console.log("result: True");
}
else {
    console.log("Result: False");
}
// Test 3 lets check if aa + bb is equals to 15
if (aa + bb === 15) {
    console.log("result: True");
}
else {
    console.log("Result: False");
}
// Lets check if if ee + dd = 7
if (ee + dd === 7) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
// Lets check if dd * cc = 8
if (dd * cc === 8) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
//All True Aspects done, as per assignment,now false conditions
if (dd * ee === 14) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
if (bb + cc === 17) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
if (bb * ee === 32) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
if (bb / cc === 4) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
if (bb * dd === 39) {
    console.log("result: True");
}
else {
    console.log("result: False");
}
//All conditions of True and False are done
//17 Alien color
var alien_color = "red";
if (alien_color === "green") {
    console.log("result: Player just earned 5 points.");
}
else {
    console.log("result: no output");
}
//both results coming 
//18
var alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("result: Player just earned 5 points");
}
else {
    console.log("result: Player just earned 10 points");
}
var alienColor = "green";
if (alienColor === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
//
var alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor1 === "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
//
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points.");
}
else {
    console.log("The player earned 15 points.");
}
//19
var ageAge = 25;
if (ageAge < 2) {
    console.log("The person is a baby.");
}
else if (ageAge >= 2 && ageAge < 4) {
    console.log("The person is a toddler.");
}
else if (ageAge >= 4 && ageAge < 13) {
    console.log("The person is a kid.");
}
else if (ageAge >= 13 && ageAge < 20) {
    console.log("The person is a teenager.");
}
else if (ageAge >= 20 && ageAge < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//20
var usernames = ["admin", "Alice", "Bob", "Charlie", "David"];
for (var _a = 0, usernames_1 = usernames; _a < usernames_1.length; _a++) {
    var username = usernames_1[_a];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", username, "thank you for logging in again.");
    }
}
//21
var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["user3", "user6", "user7", "user8", "user9"];
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_users.indexOf(new_user) !== -1) {
        console.log("The username", new_user, "is not available. Please enter a new username.");
    }
    else {
        console.log("The username", new_user, "is available.");
        current_users.push(new_user); // Add the new username to the list of current users
    }
}
//22
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(number, ordinalEnding);
}
//22
var favoritePizzas = ["Margherita", "Pepperoni", "BBQ Chicken"];
for (var _d = 0, favoritePizzas_1 = favoritePizzas; _d < favoritePizzas_1.length; _d++) {
    var pizza = favoritePizzas_1[_d];
    console.log(pizza);
}
//23
//  a list of animals with a common characteristic
var animals = ["dog", "cat", "rabbit"];
//name of each animal using a for loop
console.log("Names of the animals:");
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log(animal);
}
//statement about each animal
console.log("\nStatements about each animal:");
for (var _f = 0, animals_2 = animals; _f < animals_2.length; _f++) {
    var animal = animals_2[_f];
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
