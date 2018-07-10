console.log(body = document.body);

console.log(typeof body);

console.log(body.nodeType);

console.log(body.nodeName);

for (var i=0 ; i < document.images.length ; i++) {
    // do something with each image using document.images[i]
   }

console.log(title = document.getElementById('title'));   

console.log(paragraphs = document.getElementsByTagName('p'));

console.log(swim = paragraphs[0]);

console.log(bike = paragraphs[1]);

console.log(run = paragraphs[2]);

console.log(document.getElementsByClassName('swim'));

console.log(document.getElementsByClassName('swim').length);

console.log(document.getElementsByClassName('walk').length);

console.log(swim = document.getElementsByClassName('swim')[0]);

console.log(bike = document.querySelector('#bike'));

console.log(swim = document.querySelectorAll('.swim'));

run = document.querySelector('p:last-child');

var sports = document.getElementById('sports');

console.log(sports.childNodes);

console.log(sports.children);

console.log(sports.children.length);

console.log(sports.firstChild);

console.log(sports.lastChild);

console.log(bike.parentNode);

console.log(bike.nextSibling);

console.log(bike.previousSibling);

var meta = document.getElementsByTagName("meta")[0];

console.log(meta.getAttribute("charset"));

console.log(run.setAttribute("id","run"));

console.log(run.getAttribute("id"));

console.log(bike.id);

console.log(swim.className);

console.log(swim.className = "swim");

console.log(run.classList.add('run'));

function addClass(element,newClass){
    if (element.className) {
    element.className = swim.className + " " + newClass;
    } else {
    element.className = newClass;
      }
    return element.getAttribute("class");
   }


console.log(addClass(run,"run"));

var newPara = document.createElement('p');

var text = document.createTextNode('Transition 1');

console.log(newPara.appendChild(text));

var newPara = document.createElement('p');

console.log(newPara.textContent = 'Transition 1');

function createElement (tag,text) {
    el = document.createElement(tag);
    el.textContent = text;
    return el
   
}


var anotherPara = createElement("p","Transition 2");


console.log(sports.appendChild(newPara));

console.log(sports.insertBefore(newPara,bike));

h1 = document.getElementById("title");
oldText = h1.firstChild;
newText = document.createTextNode("Iron Man Triathlon");
h1.replaceChild(newText,oldText)

console.log(sports.innerHTML);

console.log(h1.innerHTML = "Biathlon");

console.log(sports.innerHTML = "<p>Skiing</p><p>Shooting</p>");

var sports = document.getElementById("sports"); 

console.log(sports.children.length);

console.log(document.getElementsByTagName('p')[2]);








