const buttons = document.querySelectorAll(".button");
const buttonArr = Array.from(buttons);
const text = document.getElementsByClassName("text");
let string="";
buttonArr.forEach(button => {
    button.addEventListener("click", function(event) {
        if (event.target.innerHTML === "AC") {
            string = "";
            text[0].textContent = string;

        } 
        else if (event.target.innerHTML === "=") {
            string =eval(string);
            text[0].textContent = string;
        }
         else if (event.target.innerHTML === "clear") {
            string = string.substring(0, text[0].textContent.length - 1);
            text[0].textContent = string;
        }
         else {
                // Prevent consecutive operators
                if (["+", "-", "*", "/"].includes(event.target.innerHTML) && ["+", "-", "*", "/"].includes(string.slice(-1))) {
                    return; // Ignore the input if the last character is also an operator
                }
           string += event.target.innerHTML;
            text[0].textContent = string;
        }
    });
});
