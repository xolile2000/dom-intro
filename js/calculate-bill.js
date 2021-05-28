//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
const billTotalColor = document.querySelector(".total")


let calculateBillInstance = calculateBill()
function calculateBtnClicked() {


    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("critical")



    billTotalElement.innerHTML = calculateBillInstance.totalPhoneBill(billStringField.value);


    billTotalElement.classList.add(calculateBillInstance.addColor(billStringField.value));
}



calculateBtn.addEventListener('click', calculateBtnClicked);
