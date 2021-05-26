function textBill(){
    var callCostTotal = 0
    var smsCostTotal = 0
    var theWarningLevel = 20
    var theCriticalLevel = 30
    var callCost =2.75
    var smsCost = 0.75

    function textBoxCalculate(billTypeText) {
        var billText = billTypeText.trim();
        if (billText === "call"){
            makeCall();

       }
       else if (billText === "sms"){
           makeSms();

       }
    }

    function theCallCost(){
       return callCostTotal
    }
    function theSmsCost(){
        return smsCostTotal
    }
    function makeCall(){
        callCostTotal += callCost
    }

    function makeSms(){
        smsCostTotal += smsCost
    }
  
    function getWarningLevel(){
        return theWarningLevel
    }
   
    function getCriticalLevel(){
        return theCriticalLevel
    }
    

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }
    function totalClassName(){
        if(getTotalCost() >= getCriticalLevel()){
            return "critical"
        }
        if(getTotalCost() >= getWarningLevel()){
            return "warning"
        }
    }
    return {
        theCallCost,
        theSmsCost,
        makeCall,
        getTotalCost,
        makeSms,
        getWarningLevel,
        getCriticalLevel,
        totalClassName,
        textBoxCalculate
    }
}