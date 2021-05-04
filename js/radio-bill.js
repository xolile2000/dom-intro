// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")

var callTotalTwo = document.querySelector(".callTotalTwo")

var smsTotalTwo = document.querySelector(".smsTotalTwo")

var totalTwo = document.querySelector(".totalTwo")
//create a variable that will keep track of the total bill
var trackTotalCall = 0
var trackTotalSms = 0
function radioBill(){
    var radioBillAddBtn = document.querySelector("input[name='billItemType']:checked");
    if (radioBillAddBtn){
        var billItemType = radioBillAddBtn.value
        // billItemType will be 'call' or 'sms'
        if(billItemType=== "call"){
            trackTotalCall += 2.75;
        }
        else if(billItemType==="sms"){
            trackTotalSms += 0.75
        }
    }
    

    callTotalTwo.innerHTML = trackTotalCall.toFixed(2);
    smsTotalTwo.innerHTML = trackTotalSms.toFixed(2);
    var totalCost = trackTotalCall + trackTotalSms
    totalTwo.innerHTML = totalCost.toFixed(2);

    totalTwo.classList.remove("danger");
    totalTwo.classList.remove("warning");
    
    if(totalCost >= 30){
        totalTwo.classList.add("danger")
    }
  else if(totalCost >= 20){
    totalTwo.classList.add("warning")
  } 

}
radioBillAddBtn.addEventListener('click', radioBill);
// alert(radioBillAddBtn)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
