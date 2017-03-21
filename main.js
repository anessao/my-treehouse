var myRequest = new XMLHttpRequest();

function itWorked(){
	console.log("it worked");
	var data = JSON.parse(this.responseText);
	console.log(data);
}

function itNoWorked(){
	console.log("it no worked");
}

myRequest.addEventListener("load", itWorked);
myRequest.addEventListener("error", itNoWorked);

myRequest.open("GET", "https://teamtreehouse.com/anessaortner.json");
myRequest.send();