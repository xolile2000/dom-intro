// get a reference to the textbox where the bill type is to be entered
var BillTypeTextElm= document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne= document.querySelector(".totalOne");



// var callsTotal = 0;
// var smsTotal = 0;
var textbillInstance = textBill()

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function totalTextBill(){
    // get the value entered in the billType textfield
var BillTypeTextElm = document.querySelector(".billTypeText")
    textbillInstance.textBoxCalculate(BillTypeTextElm.value)


    // update the correct total
    
        

    
    //update the totals that is displayed on the screen.
    callsTotalOne.innerHTML =  (textbillInstance.theCallCost()).toFixed(2);
    smsTotalOne.innerHTML =  (textbillInstance.theSmsCost()).toFixed(2);
    var totalCost = (textbillInstance.getTotalCost())
    totalOne.innerHTML = totalCost.toFixed(2);

    totalOne.classList.remove("critical")
    totalOne.classList.remove("warning")
    totalOne.classList.add(textbillInstance.totalClassName())

//     if(totalCost >= 30){
//         totalOne.classList.add("danger")
//     }
//   else if(totalCost >= 20){
//     totalOne.classList.add("warning")
//   }
}
addToBillBtn.addEventListener('click',totalTextBill);
