/*
	Index.js
*/
$(document).ready(function(){
"use strict";

	/*var msg="Hello Javascript";
	console.log(msg);

	var resultsDiv = document.getElementById("result");
	resultsDiv.innerHTML = "<p>This is from Javascript</p>"; */

	var resultsList = $("#resultsList");
	resultsList.text("This is come from jQuery");

	var toggleButton = $("#toggleButton");
	toggleButton.on("click", function(){
		resultsList.toggle(500);

		if(toggleButton.text() == "Hide") toggleButton.text("Show");
		else toggleButton.text("Hide");

	});

	// var result = {
	// 	name : "jquery", /* these are properties */
	// 	language : "Javascript",
	// 	score : 4.5, function() {  a property can be a function 

	// 	},
	// 	owner: {
	// 		login: "akankshamohanty",
	// 		id: 123456
	// 	}

	// }; /*curly braces indicate that whatever is going to create is the new object */
	// console.log(result.name);
	// console.log(result.score);

	// result.phoneNumber = "123-456-789";
	// console.log(result.phoneNumber);

	// var results = [{
	// 	name : "jquery I", /* these are properties */
	// 	language : "Javascript",
	// 	score : 3.5, function() {  a property can be a function 

	// 	},
	// 	owner: {
	// 		login: "akankshamohanty",
	// 		id: 123456
	// 		}
	// 	}, {
	// 	name : "jquery S", /* these are properties */
	// 	language : "Javascript",
	// 	score : 4.5, function() { /* a property can be a function */

	// 	},
	// 	owner: {
	// 		login: "akankshamohanty",
	// 		id: 123456
	// 	}
	// },  {
	// 	name : "jquery UI", /* these are properties */
	// 	language : "Javascript",
	// 	score : 4.5, function() { /* a property can be a function */

	// 	},
	// 	owner: {
	// 		login: "akankshamohanty",
	// 		id: 123456
	// 	}

	// }];

	// console.log(results.length);
	// console.log(results[0].name, results[1].name);
	// console.log(results[2].owner);


	// for(var x=1; x < results.length; x++){
	// 	var result = results[x];
	// 	if(results.score < 4) break;
	// 	console.log(result.name);
	// }*/
	// /*results.push(result);
	// results.push({
	// 	name: "dummy project"
	// });*/

	// /*console.log("msg is "+ typeof(msg));
	// console.log("resultsDiv is " + typeof(resultsDiv));

	// var none;
	// console.log("none is " + typeof(none));

	// var aNumber = 10;
	// console.log("aNumber is " + typeof(aNumber));

	// var trueFalse = true;
	// console.log("trueFalse is " + typeof(trueFalse));

	// //msgs = "This shouldn't work"; because the use strict is on therefor it will show error.

	// if(!none)
	// {
	// 	console.log("Not defined");
	// } 
	// if(aNumber == 10){
	// 	console.log("10 is 10");
	// }

	/*  function showMsg(msg) {
		console.log("ShowMsg: " + msg);
	}*/ 
	/*function showMsg(msg, more) {
		if(more){
			console.log("showMsg+ "+msg + more);
		} else {
			console.log("showMsg+ "+ msg);
	  	}
		
	}
	showMsg("Some Information");
	showMsg("More Information" , "and even more");

	var showIt = function(msg) {
		console.log(msg);
	}
	showIt("some message");
	function showItThen(msg, callback){
		showIt(msg);
		callback();
	}
	showItThen("showItThen called", function(){
		console.log("callback called");
	});
	var inGlobal = true;

	function testMe(){
		console.log("test me():" + inGlobal);

		var someMsg = "some Message";
		console.log("testMe():" + someMsg);

		showItThen("with Closure", function() {
			showIt("testMe with Closure():" + someMsg);
		});
	}
	testMe();
	/*console.log("global:" + someMsg);*/
