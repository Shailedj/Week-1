//getting name from user
var name1 = prompt("enter ur name");
//getting ADM no from user
var ADMno = prompt("enter ur ADM no");
//getting firstnumber from user
var firstno = parseInt(prompt("My first num"));
//getting second number from user
var secondno = parseInt(prompt("My second num"));
//addition the firstnumber and second number
var total = firstno+secondno;
//getting Id from the element in html file
document.getElementById("id1").innerHTML="My name is : " +name1;
//getting Id from the element in html file
document.getElementById("id2").innerHTML="My ADM no : " +ADMno;
//getting Id from the element in html file
document.getElementById("id3").innerHTML="My first num : " +firstno;
//getting Id from the element in html file
document.getElementById("id4").innerHTML="My second num : " +secondno;
//getting Id from the element in html file
document.getElementById("id5").innerHTML="My total : " +total;