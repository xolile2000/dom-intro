//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
const billTotalColor =document.querySelector(".total")
// var roundedBillTotal

let calculateBillInstance = calculateBill()
    function calculateBtnClicked(){
        
        // var billString = billStringField.value;
        
        // var billItems = billString.split(",");
        
        // var billTotal = 0;
        // calculateBillInstance = calculateBtnClicked()
        //loop over all the bill items
        billTotalElement.classList.remove("warning")
        billTotalElement.classList.remove("critical")
        
        //round to two decimals
         
        billTotalElement.innerHTML = calculateBillInstance.totalPhoneBill(billStringField.value);
        // return roundedBillTotal
        
        billTotalElement.classList.add(calculateBillInstance.addColor(billStringField.value));
    }
 


calculateBtn.addEventListener('click',calculateBtnClicked);
