
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let decisionButtons = document.querySelectorAll(".decide")
let outputBox = document.querySelector(".output-box");

let mainContainer = document.querySelector('.main-container');


let operate = ""
let firstNumber = ""
let secondNumber = ""
display = ""
numberButtons.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        if(!(e.target.textContent == "." && (operate.length == 0 ? firstNumber.includes(".") : secondNumber.includes(".")))){
            if (operate.length == 0){
                firstNumber += e.target.textContent;
                
            }else{
                secondNumber += e.target.textContent;
              
            }
            updateDisplay();
        }

        

    });
    
})

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(operate.length == 0){
            operate += e.target.textContent;
        }
        updateDisplay();

    });
});


decisionButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.textContent == "="){
            if (firstNumber && operate && secondNumber){
                evaluate();
            }else{
                outputBox.textContent = "ERROR";
            }

        }else if(e.target.textContent == "Clear"){
            clear();
        }else if(e.target.textContent == "Del"){
            del();
        }
    })
})



function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;

}
function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;

}
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;

}
function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}
function clear(){
    firstNumber = ""
    operate = ""
    secondNumber = ""
    outputBox.textContent = "0"

}
function del(){
    if (secondNumber){
        secondNumber = secondNumber.slice(0, -1);
    }else if(operate){
        operate = operate.slice(0, -1);
    }else{
        firstNumber = firstNumber.slice(0, -1)
    }
    updateDisplay();
}

function evaluate(){
    firstNumber = parseFloat(firstNumber, 10);
    secondNumber = parseFloat(secondNumber, 10);
    let result = 0;
    if (operate == "+"){
        result = add(firstNumber, secondNumber)
    }else if (operate =="-"){
        result = subtract(firstNumber, secondNumber);
    }else if (operate == "*")
        result = multiply(firstNumber, secondNumber);
    else{
        if (secondNumber === 0){
            result = "Nice try!";
        }else{
            result = divide(firstNumber, secondNumber);
        }
    }



    firstNumber = result.toString(); 
    operate = ""
    secondNumber = "";

    outputBox.textContent = firstNumber;
    return result;

}

function updateDisplay() {
    outputBox.textContent = firstNumber + operate + secondNumber;
}