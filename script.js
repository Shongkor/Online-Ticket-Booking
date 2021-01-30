function increment(parameter) {
    var inputValue = document.getElementById(parameter).value;
    inputValue = parseInt(inputValue);
    inputValue = inputValue + 1;
    document.getElementById(parameter).value = inputValue;
    amountCalculation();
}
function decrement(parameter) {
    var inputValue = document.getElementById(parameter).value;
    inputValue = parseInt(inputValue);
    if (inputValue > 0) {
        inputValue = inputValue - 1;
    }
    document.getElementById(parameter).value = inputValue;
    amountCalculation();
}
// subtotal,vat and total cost calculation;

function amountCalculation() {
    const subtotalCost = costingCalculation();
    document.getElementById("subtotal").innerText = subtotalCost[0];
    const vat = costingCalculation();
    document.getElementById("vat").innerText = vat[1];
    const total = costingCalculation();
    document.getElementById("total").innerText = total[2];
}
function costingCalculation() {
    const parameterFirstClass = parseInt(document.getElementById("parameterFirstClass").value);
    const parameterEconomy = parseInt(document.getElementById("parameterEconomy").value);
    var subtotalValue = ((parameterFirstClass * 150) + (parameterEconomy * 100));
    var vatValue = subtotalValue * 0.1;
    var totalValue = subtotalValue + vatValue;
    return [subtotalValue, vatValue, totalValue];
}
// first class + sign;

const increaseFirstClass = document.getElementById("increaseFirstClass");
increaseFirstClass.addEventListener("click", function () {
    increment("parameterFirstClass");
})
// Economy + sign;

const increaseEconomy = document.getElementById("increaseEconomy");
increaseEconomy.addEventListener("click", function () {
    increment("parameterEconomy");
});
// first class - sign;

const decreaseFirstClass = document.getElementById("decreaseFirstClass");
decreaseFirstClass.addEventListener("click", function () {
    decrement("parameterFirstClass");
})
// Economy - sign

const decreaseEconomy = document.getElementById("decreaseEconomy");
decreaseEconomy.addEventListener("click", function () {
    decrement("parameterEconomy");
})
//"Book Now" Button.

bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function () {
    const firstPage = document.getElementById("firstPage");
    firstPage.style.display = "none";
    const secondPage = document.getElementById("secondPage");
    secondPage.style.display = "block"
    const body = document.getElementById("body");
    body.style.background = "none";

    var parameterFirstClassTicket = document.getElementById("parameterFirstClass").value;
    document.getElementById("firstClassTicket").innerText = parameterFirstClassTicket + " "

    var parameterEconomyTicket = document.getElementById("parameterEconomy").value;
    document.getElementById("economyTicket").innerText = parameterEconomyTicket + " "
})