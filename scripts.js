var text = document.getElementById("text");
var html = document.getElementById("html");
var api = document.getElementById("api");

text.addEventListener("click", function(){ request("https://s3.amazonaws.com/sitepoint-book-content/jsninja/hello.txt") }, false);

html.addEventListener("click", function(){ request("https://s3.amazonaws.com/sitepoint-book-content/jsninja/hello.htm") }, false);

api.addEventListener("click", function(){ request("http://ip.jsontest.com/") }, false);

function request(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById("output").innerHTML = xhr.responseText;
    }
    }
   
    xhr.open("GET", url, true);
    xhr.send();
    document.getElementById("output").innerHTML = "Waiting for response ...";
   }

   alert(JSON.stringify(hero));

   send(JSON.stringify(hero));



   function send(hero) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://reqr.es/api/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 201) {
    console.log(xhr.responseText);
    }
    };
    xhr.send(hero);
   }
      

var send = document.getElementById("send");
send.addEventListener("click", update , false);

function update() {
    var script = document.createElement("script");
    script.src = " http://echo.jsontest.com/name/superman";
    document.getElementsByTagName("head")[0].appendChild(script);
   }
   
  
   function process(response) {
    document.getElementById("output").innerHTML = response.name;
   }
   