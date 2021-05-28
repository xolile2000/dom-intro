// get a reference to the textbox where the bill type is to be entered
var BillTypeTextElm = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");




var textbillInstance = textBill()


function totalTextBill() {

    var BillTypeTextElm = document.querySelector(".billTypeText")
    textbillInstance.textBoxCalculate(BillTypeTextElm.value)



    callsTotalOne.innerHTML = (textbillInstance.theCallCost()).toFixed(2);
    smsTotalOne.innerHTML = (textbillInstance.theSmsCost()).toFixed(2);
    var totalCost = (textbillInstance.getTotalCost())
    totalOne.innerHTML = totalCost.toFixed(2);

    totalOne.classList.remove("critical")
    totalOne.classList.remove("warning")
    totalOne.classList.add(textbillInstance.totalClassName())


}
addToBillBtn.addEventListener('click', totalTextBill);
