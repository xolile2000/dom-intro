// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
//get a reference to the add button
var settingAddBtnElem = document.querySelector(".settingAddBtn")


// reference text box
var callCostSetting = document.querySelector('.callCostSetting')
var smsCostSetting = document.querySelector(".smsCostSetting")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
// var callCost = 0;
// var smsCost = 0;
// var warningLevel = 0;
// var criticalLevel = 0;

// create a variables that will keep track of all three totals.
// var totalCall = 0
// var totalSms = 0
// var costTotal = 0

var settingsInstance = BillWithSettings()

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", () => {
    settingsInstance.setCallCost(Number(callCostSetting.value))
    settingsInstance.setSmsCost(Number(smsCostSetting.value))
    settingsInstance.setWarningLevel(warningLevelSetting.value)
    settingsInstance.setCriticalLevel(criticalLevelSetting.value)
    addClassName()


})


function sittingBill() {
    //  alert(billItemTypeWithSettings)
    var settingAddBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingAddBtn) {
        var billtype = settingAddBtn.value
        // if (costTotal <= criticalLevel) {

        if (billtype === "call") {
            settingsInstance.makeCall()

        }
        else if (billtype === "sms") {
            settingsInstance.sendSms()
        }
        // }



        //  console.log(totalCall)
        callTotalSettings.innerHTML = (settingsInstance.getTotalCallCost()).toFixed(2);
        smsTotalSettings.innerHTML = (settingsInstance.getTotalSmsCost()).toFixed(2);
        totalSettings.innerHTML = (settingsInstance.getTotalCost()).toFixed(2);
        addClassName()

    }

}



function addClassName() {
    totalSettings.classList.remove("critical")
    totalSettings.classList.remove("warning")

    totalSettings.classList.add(settingsInstance.totalClassName())

}


settingAddBtnElem.addEventListener('click', sittingBill);


//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
