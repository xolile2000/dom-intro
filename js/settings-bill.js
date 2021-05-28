// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
//get a reference to the add button
var settingAddBtnElem = document.querySelector(".settingAddBtn")



var callCostSetting = document.querySelector('.callCostSetting')
var smsCostSetting = document.querySelector(".smsCostSetting")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")

var updateSettings = document.querySelector(".updateSettings")


var settingsInstance = BillWithSettings()

updateSettings.addEventListener("click", () => {
    settingsInstance.setCallCost(Number(callCostSetting.value))
    settingsInstance.setSmsCost(Number(smsCostSetting.value))
    settingsInstance.setWarningLevel(warningLevelSetting.value)
    settingsInstance.setCriticalLevel(criticalLevelSetting.value)
    addClassName()


})


function sittingBill() {

    var settingAddBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingAddBtn) {
        var billtype = settingAddBtn.value


        if (billtype === "call") {
            settingsInstance.makeCall()

        }
        else if (billtype === "sms") {
            settingsInstance.sendSms()
        }

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



