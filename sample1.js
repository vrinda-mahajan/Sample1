var inputNumber = document.querySelectorAll(".input-number");
var add = document.querySelector(".add");
var subtract = document.querySelector(".subtract");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
var output = document.querySelector(".output");

console.log(add);
function onAddition(){
    var inputOne = Number(inputNumber[0].value);
    var inputTwo = Number(inputNumber[1].value);
    var add = inputOne+inputTwo;
    output.innerText="Addition = "+ add;
}
function onSubtraction(){
    var inputOne = Number(inputNumber[0].value);
    var inputTwo = Number(inputNumber[1].value);
    if (inputOne>inputTwo){
        var sub = inputOne-inputTwo;
    }else{
        var sub = inputTwo-inputOne;
    }
    output.innerText="Subtraction = "+ sub;
}
function onMultiply(){
    var inputOne = Number(inputNumber[0].value);
    var inputTwo = Number(inputNumber[1].value);
    var multi = inputOne*inputTwo;
    output.innerText="Multiplication = "+ multi;
}
function onDivision(){
    var inputOne = Number(inputNumber[0].value);
    var inputTwo = Number(inputNumber[1].value);
    var div = inputOne/inputTwo;
    output.innerText="Division = "+ div;
}
add.addEventListener("click",onAddition);
subtract.addEventListener("click",onSubtraction);
multiply.addEventListener("click",onMultiply);
divide.addEventListener("click",onDivision);