const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
    return 'Up, up and away!';
    }
    };
    


const spiderman = new Object();

const name = 'Iron Man';

const realName = 'Tony Stark';


const ironMan = { name: realName };    
    
console.log(superman.name);

console.log(superman['name'])

console.log(superman["real" + " " + "name"]);

console.log(superman.city);

const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };

const bewitched = true;

const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };

console.log(captainBritain);


const supergirl = { [name]: 'Supergirl' };

supergirl[name];


supergirl[realName] = 'Kara Danvers';

const daredevil = { [name]: 'Daredevil', [realName]: 'Matt Murdoch' };

console.log(superman.fly());

console.log('city' in superman);

console.log(superman.city !== undefined);

console.log(superman.hasOwnProperty('city'));

console.log(superman.hasOwnProperty('name'));

for(var key in superman) {
    console.log(key + ": " + superman[key]);
   }



console.log(superman.city = "Metropolis");

console.log(superman);

console.log(superman['real name'] = "Kal-El");

console.log(superman);

console.log(delete superman.fly);

console.log(superman);

jla = {
    superman: { realName: "Clarke Kent" },
    batman: { realName: "Bruce Wayne" },
    wonderWoman: { realName: "Diana Prince" },
    flash: { realName: "Barry Allen" },
    greenLantern: { realName: "Hal Jordan" },
    martianManhunter: { realName: "John Jones" }
   }

console.log(jla.wonderWoman.realName);

console.log(jla['flash']['realName']);

console.log(jla.martianManhunter['realName']);

var batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74,"weight": 210,"hero": true,"villain": false,"allies": ["Robin","Batgirl","Superman"]}'

console.log(JSON.parse(batman));

var wonderWoman = {
    name: "Wonder Woman",
    "real name": "Diana Prince",
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ["Wonder Girl","Donna Troy","Superman"],
    lasso: function(){
    console.log("You will tell the truth!");
    }
   }

console.log(JSON.stringify(wonderWoman));

console.log(Math.PI);

console.log( Math.SQRT2);

console.log(Math.SQRT1_2);

console.log(Math.E);

console.log( Math.LN2 );

console.log( Math.LN10);

console.log(Math.LOG2E);

console.log( Math.LOG10E);

console.log( Math.abs(3));

console.log(Math.abs(-4.6));

console.log( Math.ceil(4.2));

console.log( Math.ceil(8));

console.log( Math.ceil(-4.2));

console.log( Math.floor(4.2));

console.log(Math.floor(-4.2));

console.log( Math.round(4.5));

console.log( Math.round(4.499));

console.log( Math.exp(1)); // This is Euler's constant

console.log( Math.exp(0)); // Any number to the power of 0 is 1

console.log( Math.exp(-3));

console.log( Math.pow(3,2));

console.log( Math.pow(4.5,0));

console.log(Math.sqrt(121));

console.log( Math.sqrt(-1));