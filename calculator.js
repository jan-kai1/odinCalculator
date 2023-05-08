const add = (num1, num2) => (Number(num1) + Number(num2));
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1/num2;
const operate = (operator,num1,num2) =>
    {
        if (operator == "add")
        {
            result = add(num1,num2);
            return result;
        }
        else if (operator == "subtract")
        {
            result = subtract(num1,num2);
            return result;
        }
        else if (operator == "multiply")
        {
            result = multiply(num1,num2);
            return result;
        }
        else if (operator == "divide")
        {
            result = divide(num1,num2);
            return result;
        }
    }
document.addEventListener("DOMContentLoaded", function()
{
    //variable to track if calculation in progress
    calcInProgress = false;
    //variable to track current number being displayed
    numberDisplay = document.querySelector("#displayNumber");
    //use string concatenation for numbers while typing it in
    let currentNumber = "";
    let prevNumber = 0;
    let prevOperator = "";

    numbersList = document.querySelectorAll(".calcButton")
    numbersList.forEach(function(number)
    {
        number.addEventListener("click", () =>
        {
            //.trim to get rid of whitespace in textcontenet
            currentNumber = currentNumber.concat(number.textContent);
            numberDisplay.textContent = currentNumber;
             //need to check how to continue to new calculation after pressing equal
        });
    })

    //operator buttons
    // addButton = document.querySelector("#add");
    // addButton

    operatorButtons = document.querySelectorAll(".operatorButton")
    for (let i=0; i < operatorButtons.length; i++)
    {
        operatorButtons[i].addEventListener("click", function()
        {
            //check if first number already finished
            if (calcInProgress == false)
            {
                //if not done move current number to prevNumber
                prevNumber = Number(currentNumber);
                currentNumber = ""
                //set prevOperator to the button pressed
                prevOperator = operatorButtons[i].getAttribute('value');
                calcInProgress = true;
                numberDisplay.textContent = prevNumber.toString() 
            }
            else
            //if already finished, do the previous operator on current number
            // change previous operator to new button
           
            {
                //execute previous operation
                prevNumber = operate(prevOperator, prevNumber, Number(currentNumber));
                numberDisplay.textContent = prevNumber.toString();
                currentNumber = "";
                //change prevOperator to current button
                prevOperator = operatorButtons[i].getAttribute('value');
                console.log(prevNumber)
            }

        });
    }

    //equal button, finish all calculations
    //TODO
    equalButton = document.querySelector(".calculate");
    equalButton.addEventListener("click", function()
    {
        prevNumber = operate(prevOperator, prevNumber, Number(currentNumber));
        //
        numberDisplay.textContent = prevNumber.toString();
        calcInProgress = false;
      
        currentNumber = "";
    });
   

    //reset button
    //TODO
    resetButton = document.querySelector("#reset")

    
 





});