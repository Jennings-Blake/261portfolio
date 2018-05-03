




<script>
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

const ironMan = ( name: name, realName: realName };

const ironMan = { name: realName };    
    
console.log(superman.name);

console.log(superman['name'])

console.log(superman["real" + " " + "name"]);

console.log(superman.city);

const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };

const bewitched = true;

const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };

console.log(captainBritain);

const name = Symbol('name');

const supergirl = { [name]: 'Supergirl' };

supergirl[name];

const realName = Symbol('real name');

supergirl[realName] = 'Kara Danvers';

const daredevil = { [name]: 'Daredevil', [realName]: 'Matt Murdoch' };

console.log(superman.fly());

console.log('city' in superman);

console.log(superman.city !== undefined);


</script>