var Turtle = function(name) {
    this.name = name;
    this.sayHi = function() {
    return "Hi dude, my name is " + this.name;
    }
   }

   var leo = new Turtle("Leonardo");

console.log(leo.name);

console.log(leo.sayHi());

console.log(Turtle.prototype);

console.log(Turtle.prototype.weapon = "Hands");

console.log(Turtle.prototype.attack = function(){
    return this.name + " hits you with his " + this.weapon;
    } );


var raph = new Turtle("Raphael");

console.log(raph.name);

console.log(raph.sayHi());

console.log(raph.weapon); // inherited from the prototype

console.log(raph.attack()); // inherited from the prototype

console.log(raph.constructor.prototype);

console.log(Object.getPrototypeOf(raph));

console.log(Turtle.prototype.isPrototypeOf(raph));

console.log(raph.hasOwnProperty('name'));

console.log(raph.hasOwnProperty('weapon'));

var don = new Turtle("Donatello");

console.log(don.weapon);

console.log(leo.weapon);

console.log(leo.attack());

console.log(Turtle.prototype.weapon = "Feet");

console.log(leo.attack());

console.log(raph.attack());

console.log(don.attack());

console.log(leo.weapon = "Katana Blades");

console.log(raph.weapon = "Sai");

console.log(don.weapon = "Bo Staff");

console.log(leo.attack());

Turtle.prototype.food = "Pizza";

Turtle.prototype.eat = function() {
    return "Mmm, this " + this.food + " tastes great!";
   }

var Turtle = function(name,food) {
    this.name = name;
    this.food = food || "pizza";
   }
      
var mike = new Turtle("Michelangelo");

console.log(mike.weapon = "Nunchuks");

console.log(raph.weapon);

console.log(mike.__proto__);

console.log(mike.__proto__.constructor === Turtle);

console.log(mike.__proto__.__proto__);

console.log(mike.__proto__.constructor);

console.log(mike.__proto__.__proto__.__proto__);

console.log([1,2,3].toString());

console.log(new Number(2));

console.log(typeof Number(2));

console.log(2 instanceof Number);

console.log(2..toExponential());

console.log(new Number(2).toExponential());

console.log(mike.toString());

Turtle.prototype.toString = function() {
    return "A turtle called " + this.name;
   }

console.log(mike.toString());

example = {};

Object.defineProperty(example, 'sillyString', {
    get: function() {
        return "Craaazy!";
    },
    set: function(value) {
    return value;
    }
    });

console.log(example.sillyString = "Hello");

console.log(example.sillyString);



var Dice = function() {
    "use strict";
    var sides = 6;
    Object.defineProperty(this, 'sides', {
    get: function() {
    return "This dice has " + sides + " sides";
    },
    set: function(value) {
    if(value > 0) {
    sides = value;
    return sides;
    } else {
    throw new Error("The number of sides must be positive");
    }
    }
    });
    this.roll = function() {
    return Math.floor(sides * Math.random() + 1)
    }
   }

   var yellow = new Dice(6);

console.log(yellow.sides);

console.log(yellow.sides = 10);

console.log(yellow.sides);

var Human = {
    arms: 2,
    legs: 2,
    walk: function() { console.log("Walking"); }
   }

console.log(lois = Object.create(Human));

console.log(lois.name = "Lois Lane");

console.log(lois.job = "Reporter");

console.log(Superhuman = Object.create(Human));



   





   
    

















   









