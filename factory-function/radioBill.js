function radioBill() {
    var callCost = 2.75
    var smsCost = 0.75
    var callCostTotal = 0
    var smsCostTotal = 0
    var theWarningLevel = 30
    var theCriticalLevel = 50

    function radiobillTotal(radioBillAddBtn) {
        var billItemType = radioBillAddBtn;

        if (billItemType === "call") {
            makeCall()
        }
        else if (billItemType === "sms") {
            makeSms()
        }
    }

    function totalCallCost() {
        return callCostTotal
    }
    function totalSmsCost() {
        return smsCostTotal
    }

    function makeCall() {
        callCostTotal += callCost
    }

    function makeSms() {
        smsCostTotal += smsCost
    }

    function getWarningLevel() {
        return theWarningLevel
    }

    function getCriticalLevel() {
        return theCriticalLevel
    }


    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }
    function totalClassName() {
        if (getTotalCost() >= getCriticalLevel()) {
            return "critical"
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }
    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }
    return {
        totalCallCost,
        totalSmsCost,
        makeSms,
        makeCall,
        getTotalCost,
        totalClassName,
        radiobillTotal
    }
}
