// console.log("Hello Wolrd");
// // alert("K chha?");
// let response = prompt("What is the value?");
// console.log("your name is " + response);
// alert("Hello " + response);

// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = response;

let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output")
let singlePeople = ["rupesh", "shyam", "hari", "vishal", "sagar"]
let breakUp = ["rabin", "sandesh", "dinesh"]
function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;
    if (name1.length == 0 || name2.length == 0) {

        output.innerText = "Please Enter both names"
    }

    else {

        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = "Single nai marchhas"

        }
        else {
            if (breakUp.includes(name1.toLowerCase())) {
                output.innerText = "100% Breakup"

            }

            else {
                let lovePercent = parseInt(Math.random() * 100)
                output.innerText = name1 + " and " + name2 + " are " + lovePercent + "% in love"

            }
        }
        yourName.value = ""
        theirName.value = ""
    }
}