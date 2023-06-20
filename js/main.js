$('.carousel').carousel({
	interval:1000,
	pause:"hover"
})

function loadXMLDoc(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo").innerHTML =
		this.responseText;
	  }
	};
	xhttp.open("GET", "txt/pruebaXMLhttp.txt", true);
	xhttp.send();
}

function loadXMLDoc1() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		myFunction(this);
	  }
	};
	xmlhttp.open("GET", "xml/w3schools.com_xml_cd_catalog.xml", true);
	xmlhttp.send();
}
  
function myFunction(xml) {
	var x, i, xmlDoc, txt;
	xmlDoc = xml.responseXML;
	txt = "";
	x = xmlDoc.getElementsByTagName("ARTIST");
	for (i = 0; i< x.length; i++) {
		txt += x[i].childNodes[0].nodeValue + "<br>";
	}
	document.getElementById("demo2").innerHTML = txt;
}

function sinJsonEx1(){
	const myObj = {name:"John", age:30, city:"New York"};
	document.getElementById("demo3").innerHTML = myObj.name;
}

function sinJsonEx2(){
	const myObj = {name:"John", age:30, city:"New York"};
	document.getElementById("demo4").innerHTML = myObj["name"];
}

function sinJsonEx3(){
	const myObj = {name:"John", age:30, city:"New York"};
	myObj.name = "Gilbert";
	document.getElementById("demo5").innerHTML = myObj.name;
}

function sinJsonEx4(){
	const myObj = {name:"John", age:30, city:"New York"};
	myObj["name"] = "Gilbert";
	document.getElementById("demo6").innerHTML = myObj.name;
}


function parseJsonEx1(){
	const txt = '{"name":"John", "age":30, "city":"New York"}'
	const obj = JSON.parse(txt);
	document.getElementById("demo7").innerHTML = obj.name + ", " + obj.age;
}

function parseJsonEx2(){
	const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
	const myArr = JSON.parse(text);
	document.getElementById("demo8").innerHTML = myArr[0];
}

function parseJsonEx3(){
	const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
	const obj = JSON.parse(text);
	obj.birth = new Date(obj.birth);
	document.getElementById("demo9").innerHTML = obj.name + ", " + obj.birth;
}

function parseJsonEx4(){
	const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
	const obj = JSON.parse(text, function (key, value) {
  	if (key == "birth") {
    	return new Date(value);
  	} else {
    	return value;
 	 }
	});
	document.getElementById("demo10").innerHTML = obj.name + ", " + obj.birth;
}

function parseJsonEx5(){
	const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
	const obj = JSON.parse(text);
	obj.age = eval("(" + obj.age + ")");
	document.getElementById("demo11").innerHTML = obj.name + ", " + obj.age();
}

function stringfyJsonEx1(){
	const obj = {name: "John", age: 30, city: "New York"};
	const myJSON = JSON.stringify(obj);
	document.getElementById("demo12").innerHTML = myJSON + "<br>";
}

function stringfyJsonEx2(){
	const arr = ["John", "Peter", "Sally", "Jane"];
	const myJSON = JSON.stringify(arr);
	document.getElementById("demo13").innerHTML = myJSON + "<br>";
}

function stringfyJsonEx3(){
	// Storing data:
	const myObj = { name: "John", age: 31, city: "New York" };
	const myJSON = JSON.stringify(myObj);
	localStorage.setItem("testJSON", myJSON);

	// Retrieving data:
	let text = localStorage.getItem("testJSON");
	let obj = JSON.parse(text);
	document.getElementById("demo14").innerHTML = obj.name + "<br>";
}

function stringfyJsonEx4(){
	const obj = {name: "John", today: new Date(), city: "New York"};
	const myJSON = JSON.stringify(obj);
	document.getElementById("demo15").innerHTML = myJSON + "<br>";
}

function stringfyJsonEx5(){
	const obj = {name: "John", age: function () {return 30;}, city: "New York"};
	const myJSON = JSON.stringify(obj);
	document.getElementById("demo16").innerHTML = myJSON +"<br>";
}

function stringfyJsonEx6(){
	const obj = {name: "John", age: function () {return 30;}, city: "New York"};
	obj.age = obj.age.toString();
	const myJSON = JSON.stringify(obj);
	document.getElementById("demo17").innerHTML = myJSON +"<br>";
}

function objJsonEx1(){
	const myObj = {"name":"John", "age":30, "car":null};
	document.getElementById("demo18").innerHTML = myObj.name + "<br>";
}

function objJsonEx2(){
	const myJSON = '{"name":"John", "age":30, "car":null}';
	const myObj = JSON.parse(myJSON);
	document.getElementById("demo19").innerHTML = myObj.name + "<br>";
}

function objJsonEx3(){
	const myJSON = '{"name":"John", "age":30, "car":null}';
	const myObj = JSON.parse(myJSON);
	document.getElementById("demo20").innerHTML = myObj.name +"<br>";
}

function objJsonEx4(){
	const myJSON = '{"name":"John", "age":30, "car":null}';
	const myObj = JSON.parse(myJSON);
	document.getElementById("demo21").innerHTML = myObj["name"] + "<br>";
}

function objJsonEx5(){
	const myJSON = '{"name":"John", "age":30, "car":null}';
	const myObj = JSON.parse(myJSON);

	let text = "";
	for (const x in myObj) {
  	text += x + ", ";
	}
	document.getElementById("demo22").innerHTML = text + "<br>";
}

function objJsonEx6(){
	const myJSON = '{"name":"John", "age":30, "car":null}';
	const myObj = JSON.parse(myJSON);

	let text = "";
	for (const x in myObj) {
  	text += myObj[x] + ", ";
	}
	document.getElementById("demo23").innerHTML = text + "<br>";
}

function arrJsonEx1(){
	const myArray = ["Ford", "BMW", "Fiat"];
	document.getElementById("demo24").innerHTML = myArray + "<br>";
}

function arrJsonEx2(){
	const myJSON = '["Ford", "BMW", "Fiat"]';
	const myArray = JSON.parse(myJSON);
	document.getElementById("demo25").innerHTML = myArray + "<br>";
}

function arrJsonEx3(){
	const myJSON = '["Ford", "BMW", "Fiat"]';
	const myArray = JSON.parse(myJSON);
	document.getElementById("demo26").innerHTML = myArray[0] + "<br>";
}

function arrJsonEx4(){
	const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
	const myObj = JSON.parse(myJSON);

	document.getElementById("demo27").innerHTML = myObj.cars[0] + "<br>";
}

function arrJsonEx5(){
	const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
	const myObj = JSON.parse(myJSON);

	let text = "";
	for (let i in myObj.cars) {
  	text += myObj.cars[i] + ", ";
	}

	document.getElementById("demo28").innerHTML = text + "<br>";
}

function arrJsonEx6(){
	const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
	const myObj = JSON.parse(myJSON);

	let text = "";
	for (let i = 0; i < myObj.cars.length; i++) {
  	text += myObj.cars[i] + ", ";
	}

	document.getElementById("demo29").innerHTML = text + "<br>";
}

function intAjaxEx1() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
	  document.getElementById("demo30").innerHTML =
	  this.responseText;
	}
	xhttp.open("GET", "txt/ajax_info.txt");
	xhttp.send();
}

function xmlHttpAjaxEx1() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
	  document.getElementById("demo31").innerHTML =
	  this.responseText;
	}
	xhttp.open("GET", "txt/ajax_info.txt");
	xhttp.send();
}

function xmlHttpAjaxEx2() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
	  document.getElementById("demo32").innerHTML =
	  this.responseText;
	}
	xhttp.open("GET", "txt/ajax_info.txt");
	xhttp.send();
}

function xmlHttpAjaxEx3() {
	const xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      	document.getElementById("demo33").innerHTML =
      	this.responseText;
    	}
  	};
  	xhttp.open("GET", "txt/ajax_info.txt");
  	xhttp.send();
}

function loadDoc3() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		xmlAjaxEx1(this);
	}
	xhttp.open("GET", "xml/w3schools.com_xml_cd_catalog.xml");
	xhttp.send();
}

function xmlAjaxEx1(xml) {
	const xmlDoc = xml.responseXML;
	const x = xmlDoc.getElementsByTagName("CD");
	let table="<tr><th>Artist</th><th>Title</th></tr>";
	for (let i = 0; i <x.length; i++) { 
	  table += "<tr><td>" +
	  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
	  "</td><td>" +
	  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
	  "</td></tr>";
	}
	document.getElementById("demo34").innerHTML = table;
}

function loadDoc4() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		appAjaxEx1(this);
	}
	xhttp.open("GET", "xml/w3schools.com_xml_cd_catalog.xml");
	xhttp.send();
}

function appAjaxEx1(xml) {
	const xmlDoc = xml.responseXML;
	const x = xmlDoc.getElementsByTagName("CD");
	let table="<tr><th>Artist</th><th>Title</th></tr>";
	for (let i = 0; i <x.length; i++) { 
	  table += "<tr><td>" +
	  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
	  "</td><td>" +
	  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
	  "</td></tr>";
	}
	document.getElementById("demo35").innerHTML = table;
}


let i = 0;
let len;
let cd;

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = xhttp.responseXML;
  cd = xmlDoc.getElementsByTagName("CD");
  len = cd.length;
  displayCD(i);
}
xhttp.open("GET", "xml/w3schools.com_xml_cd_catalog.xml");
xhttp.send();

function displayCD(i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
  if (i < len-1) {
    i++;
    displayCD(i);
  }
}

function previous() {
  if (i > 0) {
    i--;
    displayCD(i);
  }
}

const xhttp2 = new XMLHttpRequest();
let cd2;
xhttp2.onload = function() {
 const xmlDoc = xhttp2.responseXML; 
 cd2 = xmlDoc.getElementsByTagName("CD");
 loadCD3();
}
xhttp2.open("GET", "xml/w3schools.com_xml_cd_catalog.xml");
xhttp2.send();

function loadCD3() {
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) { 
    table += "<tr onclick='displayCD2(" + i + ")'><td>";
    table += cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
    table += "</td><td>";
    table += cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    table += "</td></tr>";
  }
  document.getElementById("demo36").innerHTML = table;
}

function displayCD2(i) {
  document.getElementById("showCD2").innerHTML =
  "Artist: " +
  cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function loadDoc5(url, xFunction) {
	const xhttp=new XMLHttpRequest();
	xhttp.onload = function() {xFunction(this);}
	xhttp.open("GET", url);
	xhttp.send();
  }
  
  function myFunction3(xhttp) {
	document.getElementById("demo37").innerHTML =  xhttp.responseText;
}

const xhttp3 = new XMLHttpRequest();
xhttp3.onload = function() {
  document.getElementById("demo38").innerHTML =
  this.getAllResponseHeaders();
}
xhttp3.open("GET", "txt/ajax_info.txt");
xhttp3.send();

const xhttp4=new XMLHttpRequest();
xhttp4.onload = function() {
  document.getElementById("demo39").innerHTML =
  this.getResponseHeader("Last-Modified");
}
xhttp4.open("GET", "txt/ajax_info.txt");
xhttp4.send();
