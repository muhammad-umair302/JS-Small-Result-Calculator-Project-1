function calulateResult() {
        let userNumber = document.getElementById('number').value
        let calculatedPercentage = userNumber / 750 * 100;  106
        console.log(calculatedPercentage)
        if (calculatedPercentage >= 80 && calculatedPercentage <= 100) {
            alert("You got A+ congrats")
        }
        else if (calculatedPercentage >= 70 && calculatedPercentage < 80) {
            alert("You got A congrats")
        }
        else if (calculatedPercentage >= 60 && calculatedPercentage < 70) {
            alert("You got B congrats")
        }
        else if (calculatedPercentage >= 50 && calculatedPercentage < 60) {
            alert("You got C congrats")
        }
        else if (calculatedPercentage < 50) {
            alert("You are fail")
        }
        else {
            alert("please enter a valid input")

            
        }
        console.log(userNumber)
        console.log(percentage)
    }