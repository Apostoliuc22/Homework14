var x = parseInt(prompt("Please enter value of x"));
var n = parseInt(prompt("Please enter value of n"));
var result = Math.pow(x, n);
var resultText = "<h2>" + "Result of x = " + x + " in power of n = " + n + " equals = " + result + "</h2>";
var divElement = document.createElement("div");
divElement.innerHTML = resultText;
document.body.append(divElement);
alert("Result of x = " + x + " in power of n= " + n + " equals " + result);
