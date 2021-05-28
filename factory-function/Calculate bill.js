function calculateBill() {

    function totalPhoneBill(billString) {

        var billItems = billString.split(",");

        var billTotal = 0;

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }


        }
        return billTotal.toFixed(2)

    }
    function addColor(billString) {
        if (totalPhoneBill(billString) >= 20 && totalPhoneBill(billString) < 30) {
            return "warning"
        }
        if (totalPhoneBill(billString) >= 30) {
            return "critical"
        }

    }
    return {
        addColor,
        totalPhoneBill,
    }
}


