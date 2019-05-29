function saySomething(phrase){
    console.log("You said " + phrase)
}

function getPhrase(phrase, another){
var l = phrase.length + another.length; 

function printBoth(){
    return phrase + "  " + another;
}
return printBoth();
}

var p1 = "This is a slightly longer sentence";
var p2 = "This is a shorter sentence";

var computed = getPhrase(p1, p2);
console.log("The length of the 2 strings combined is " + computed);
console.log("the thisLength variable is a " + typeof p1);