// Example for creating an object
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
} // Looks much like a dictionary

//Another example
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: { //a nested object
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival : { //In other words, an object as a trait of an object
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

//Retrieval of values in an object

document.writeln(stooge["first-name"]); //stooge["first-name"] == "Jerome" //use [] suffix if trait name is a string literal
document.writeln(flight.departure.IATA); // if not a string literal and not an illegal javascript name or reserved word,
                                         // .(dot) notation works
//Undefined is returned if an attempt is made to retrieve a nonexistant member
//The ||(or) operator can be used to  fill in default values
var middle = stooge["middle-name"] || "(none)";
document.writeln(middle); //none

//Fight against throwing a TypeError when retrieving from an undefined value by using the &&(and) operator
var model = flight.equipment &&flight.equipment.model;
document.writeln(model); // undefined

//Updating objects
stooge['first-name'] = 'Jerome'; //Replaces the value if it already exists

stooge.nickname = 'Curly'; //Augments the object if the value does not exist
document.writeln(stooge.nickname); //Curly

//Objects are passed by reference and never copied
var x = stooge; //x === stooge
x.nickname = 'Frank';
var nick = stooge.nickname;
document.writeln(nick); //Frank

//Prototype
//Every object is linked to a prototype from which is inherits properties
//Here is a create method that creates a new object with an old object as a prototype
if(typeof Object.create !== "function") {
    Object.create = function(o) {
        var F = function() {}
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
//When updating an object, it's prototype is not affected at all.
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
document.writeln(stooge.nickname); // Still Frank
document.writeln(another_stooge.nickname); //Moe

//Enumeration
//The for in loop can go over all property names in an object
//It also includes all functions and prototype functions, so it's important to filter
var name;
for (name in another_stooge){
    if (typeof another_stooge[name] !== 'function') { //Here typeof is used to filter out functions
        document.writeln(name + ': ' + another_stooge[name]);
    }
}
