function runCode() {
    var fact1 = "Rotary engines are really just spinning doritos in a pinched oval...";
    var fact2 = "The 13b rotary engine actually displaces 2.6L of air... not 1.3L";
    var myAge = 18;
    alert(fact1 + myAge);
}

//how to link a html button to a javascript function

var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log("button clicked")
    var customText = document.getElementsByClassName("my-input");
    var textArea = document.getElementsByClassName("my-textarea");

    var results = document.getElementById("text");

    results.innerHTML = "Hello, " + customText[0].value + "<br/>";
    results.innerHTML += "Message " +textArea[0].value
    
}

btn.addEventListener("click", buttonClicked);

// how to create an array
var hobbies =["anime", "basktball", "cars", "football"]
console.log(hobbies);

// hobbies.push adds an item to the end of an array
hobbies.push("programming");
console.log(hobbies);


// hobbies.pop takes the last item out of an array and store's it
console.log("Actually, I don't like " + hobbies.pop());

// how to find out how many items are in an array
hobbies.length;

// how to get the last item in an array
console.log(hobbies[hobbies.length - 1]);

// hobbies.shift removes the first item out of an array and stores it
hobbies.shift;

// hobbies.unshift adds an item to the start of an array
hobbies.unshift("reading");

// how to loop through an array
hobbies.forEach(function(item, index){
    console.log("I like", item, index)
});


// how to find the index of an item in an array
var indexNum = hobbies.indexOf("cars");
console.log(indexNum);

// how to remove indecies from arrays the first (the first argument is the index you wanna start removing from, the 2nd argumnent is how many indecies you want to remove from the first argument onwards)
hobbies.splice(indexNum, 2) 

// how to validate if an item is in an array
if(hobbies.indexOf("reading") > -1){
    console.log("reading is in the array")
}