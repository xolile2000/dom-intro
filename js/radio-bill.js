// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")

var callTotalTwo = document.querySelector(".callTotalTwo")

var smsTotalTwo = document.querySelector(".smsTotalTwo")

var totalTwo = document.querySelector(".totalTwo")
var billItemType = "";

var radiobillInstance = radioBill()
function radioBillCalc() {

    var radioBillAddBtn = document.querySelector("input[name='billItemType']:checked");
    if (radioBillAddBtn) {

        billItemType = radioBillAddBtn.value

    }
    radiobillInstance.radiobillTotal(billItemType);


    callTotalTwo.innerHTML = (radiobillInstance.totalCallCost()).toFixed(2);
    smsTotalTwo.innerHTML = (radiobillInstance.totalSmsCost()).toFixed(2);
    var totalCost = (radiobillInstance.getTotalCost());
    totalTwo.innerHTML = totalCost.toFixed(2);

    totalTwo.classList.remove("critical");
    totalTwo.classList.remove("warning");
    totalTwo.classList.add(radiobillInstance.totalClassName())


}
radioBillAddBtn.addEventListener('click', radioBillCalc);

