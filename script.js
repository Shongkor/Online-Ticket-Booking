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
    const firstClassInput = parseInt(document.getElementById("firstClassInput").value);
    const EconomyClassInput = parseInt(document.getElementById("EconomyClassInput").value);
    var subtotalValue = ((firstClassInput * 150) + (EconomyClassInput * 100));
    var vatValue = subtotalValue * 0.1;
    var totalValue = subtotalValue + vatValue;
    return [subtotalValue, vatValue, totalValue];
}
// first class + sign;

const increaseFirstClass = document.getElementById("increaseFirstClass");
increaseFirstClass.addEventListener("click", function () {
    increment("firstClassInput");
})
// Economy + sign;

const increaseEconomy = document.getElementById("increaseEconomy");
increaseEconomy.addEventListener("click", function () {
    increment("EconomyClassInput");
});
// first class - sign;

const decreaseFirstClass = document.getElementById("decreaseFirstClass");
decreaseFirstClass.addEventListener("click", function () {
    decrement("firstClassInput");
})
// Economy - sign

const decreaseEconomy = document.getElementById("decreaseEconomy");
decreaseEconomy.addEventListener("click", function () {
    decrement("EconomyClassInput");
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

    var firstClassInputTicket = document.getElementById("firstClassInput").value;
    document.getElementById("firstClassTicket").innerText = firstClassInputTicket + " "

    var EconomyClassInputTicket = document.getElementById("EconomyClassInput").value;
    document.getElementById("economyTicket").innerText = EconomyClassInputTicket + " "
})