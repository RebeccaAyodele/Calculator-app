const themeOne = document.getElementById("theme-one");
const themeTwo = document.getElementById("theme-two");
const themeThree = document.getElementById("theme-three");

// Add event listeners
themeOne.addEventListener("click", function() {
    document.body.classList.remove("active2", "active3");
});

themeTwo.addEventListener("click", function() {
    document.body.classList.add("active2");
    document.body.classList.remove("active3");
});

themeThree.addEventListener("click", function() {
    document.body.classList.add("active3");
    document.body.classList.remove("active2");
});



function toDisplay(value){
    display.innerText += value;
}

function reset() {
    display.innerText = "";
}

function del(){
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    let expression = display.innerText;
    expression = expression.replace(/x/g, "*");

    try {
        const result = eval(expression);
        display.innerText = result;
    }
    catch(error){
        display.innerText = "Error";
    }
}