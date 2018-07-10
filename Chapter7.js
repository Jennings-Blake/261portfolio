function doSomething(){
    console.log("Something Happened!");
   }
   addEventListener("click", doSomething);

   function doSomething(event){
    console.log(event.type);
   }

   function doSomething(event){
    console.log(event.target);
   }

   function doSomething(event){
    console.log("screen: (" + event.screenX + "," + event.screenY + "), page: (" + event.pageX + "," + event.pageY + "), client: (" +
   event.screenX + "," + event.screenY + ")");
   }
   
   function doSomething(event) {
    console.log(event.which);
   };

   var click = document.getElementById("click");
click.addEventListener("mousedown",function(){ console.log("down") });
click.addEventListener("click",function(){ console.log("click") });
click.addEventListener("mouseup",function(){ console.log("up") });

var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", highlight);
function highlight(event){
 event.target.classList.toggle("highlight");
 }

 var mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", highlight);
mouse.addEventListener("mouseout", highlight);

mouse.addEventListener("mousemove", function() { console.log("You Moved!"); } );


