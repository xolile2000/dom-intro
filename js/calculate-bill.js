//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
var roundedBillTotal
    function calculateBtnClicked(){
        // get the string entered in the textArea
        var billString = billStringField.value;
        //split the string
        var billItems = billString.split(",");
        // a variable for the total phone bill.
        var billTotal = 0;
        //loop over all the bill items
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
        
        //round to two decimals
         roundedBillTotal = billTotal.toFixed(2);
        billTotalElement.innerHTML = roundedBillTotal;
        // return roundedBillTotal
        billTotalElement.classList.remove("warning")
        billTotalElement.classList.remove("danger")
        if(roundedBillTotal >= 30){
            billTotalElement.classList.add("danger")
        }
      else if(roundedBillTotal >= 20){
            billTotalElement.classList.add("warning")
        }
 
    }
 


calculateBtn.addEventListener('click',calculateBtnClicked);
