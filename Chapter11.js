function random(a,b) {
 if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
 return Math.floor((b-a+1) * Math.random()) + a;
}


console.log(random(6));

console.log(random(10,20));

function reverse(string) {
    var array = string.split("");
    array.reverse();
    return array.join("");
   }

  var message = "Hello";
   
console.log(reverse(message));

console.log(message); // hasn't changed

function square(x){
    return x*x;
   }

   function hypotenuse(a,b) {
    total = square(a) + square(b);
    return Math.sqrt(total);
    }



console.log(hypotenuse(3,4));

function sum(array, callback) {
    if(typeof callback === "function") {
    array = array.map(callback);
}
return array.reduce( function(a,b) { return a + b });
}

console.log(sum([1,2,3])); // returns 1 + 2 + 3

console.log(sum([1,2,3], square));

function mean(array) {
    return sum(array)/array.length;
   }

   function standardDeviation(array) {
    return sum(array,square)/array.length - square(mean(array))
   }

   
   function power(x) {
    return function(power) {
    return Math.pow(x,power);
    }
   }   

console.log(twoExp = power(2));

console.log(twoExp(5));

console.log(tenExp = power(10));

console.log(tenExp(6));

console.log(power(3)(5));

console.log(square.length);

function sayHi(){
    return "Hi " + this.name;
   }

alfie = { name: "Alfie" };
betty = { name: "Betty" };

console.log(sayHi.call(alfie));

console.log(sayHi.call(betty));

function greet(greeting){
    return greeting + " " + this.name;
   }

console.log(greet.call(alfie, "Hello"));

console.log(greet.call(betty, "Yo"));

console.log(square.call(null, 4));

console.log(square.apply(null, [4]));

console.log(square.description = "Squares a number that is provided as an argument");

function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
   }

   
   function selfDestruct(){
    console.log("BOOOOM!");
   }

   wait("This tape will self-destruct in five seconds ... ", selfDestruct, 5);
   console.log("Hmmm, should I accept this mission or not ... ?");

var outside = "I'm a global variable";
function fun() {
var inside = "I'm a global variable";
   }
   
console.log(outside);

function temple(){
    var weapons = "Katana, Bo, Shuriken, Yuri";

function innerSanctum(){
    var stealth = "Cho Ho, Shinobi-Iri, Henso-Jutsu";
}
}

function temple(){
    var weapons = "Katana, Bo, Shuriken, Yuri";

    function innerSanctum(){
        var stealth = "Cho Ho, Shinobi-Iri, Henso-Jutsu";
        return "Ninja Skills " + weapons + " " + stealth;
        }
        return innerSanctum();
       }

       
console.log(ninja = temple());

function closure() {
    var a = 1.8;
    var b = 32;
    return function(c){
    return c * a + b;
    }
   }

toFahrenheit = closure();

console.log(toFahrenheit(30));   

function counter(start){
    i = start;
    return function() {
    return i++;
    }
   }

   
var count = counter(1); // start a counter at 1

console.log(count());

console.log(count());

function multiplier(x){
    return function(y){
    return x*y;
    }
   }

doubler = multiplier(2);
   
console.log(doubler(10));

tripler = multiplier(3);

console.log(tripler(10));

(function(){
    var temp = "world";
    console.log("Hello " + temp);

console.log}());
    
a = 1;
b = 2;
(function(){
 var temp = a;
 a = b;
 b = temp;
}());

console.log(a);

var list = [1,2,3];
for (var i = 0, max = list.length ; i < max ; i++ ){
 console.log(list[i]);
}

console.log(i); // i is still available outside the for block

var name = "Bart"; // This might be obtained from a cookie in reality
 var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 date = new Date();
 today = days[date.getDay()];
 console.log("Welcome back " + name + ". Today is " + today);






   
   
   
      



   




   