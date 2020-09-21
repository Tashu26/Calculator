var elements;
var ans;
var equal;
var remo;

window.onload = function() {
    elements = document.getElementsByClassName('data');
    ans = document.getElementById('ans');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", addtocurrentvalue(i));
    }
    equal = document.getElementById("m");
    equal.addEventListener("click", calculate());
}

function addtocurrentvalue(i) {

    return function() {
        if (elements[i].innerHTML === "÷") {
            ans.innerHTML += "/";
        } else if (elements[i].innerHTML === "x") {
            ans.innerHTML += "*";
        } else {
            ans.innerHTML += elements[i].innerHTML;
        }
    };
}

function calculate() {
    return function() {
        ans.innerHTML = eval(ans.innerHTML);
    };
};

var clear = document.getElementById("AC");
clear.onclick = function() {
    ans.innerHTML = '';

};

var backspace = document.getElementById("remove");
backspace.onclick = function() {
    // var ans.innerHTML;

    var end = ans.innerHTML.length - 1;
    ans.innerHTML = ans.innerHTML.slice(0, end);
    console.log("demo " + ans.innerHTML);
};

// var temp = "67+78-";
// var end = temp.length-1;
// console.log(temp.slice(0,end));

// remo = document.getElementById("n");
// remo.addEventListener("click", remove());


// function(remove) {
//     var ans.innerHTML;
//     var end = temp.length - 1;
// }