var xhr = new XMLHttpRequest();

xhr.onreadystatechange = processResponse;

xhr.open("GET", "path/to/resource", true);

xhr.send();

xhr.send("name=Superman");

xhr.send("name:Superman");

function processResponse() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    // do something with the response
    }
   }

   
   