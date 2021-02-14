let income = document.getElementById("income");
let married = document.getElementById("married");
let single = document.getElementById("single");
let result = document.getElementById("result");
let year = document.getElementById("year");


function calculation() {

    let incomeStatus;
    let taxes;

    if (married.checked) {
        incomeStatus = (income.value) / 2;
    } else {
        incomeStatus = (income.value);
    };

    if (year.value === "2021") {

        if (incomeStatus <= 9744) {
            taxes = 0
        } else if (9745 <= incomeStatus && incomeStatus <= 14753) {
            let y = (incomeStatus - 9744) / 10000
            taxes = (995.21 * y + 1400) * y
        } else if (14754 <= incomeStatus && incomeStatus <= 57918) {
            let y = (incomeStatus - 14753) / 10000
            taxes = (208.85 * y + 2397) * y + 950.96
        } else if (57919 <= incomeStatus && incomeStatus <= 274612) {
            taxes = 0.42 * incomeStatus - 9136.63
        } else { //274613 <= incomeStatus 
            taxes = 0.42 * incomeStatus - 17374.99
        }

    } else if (year.value === "2020") {

        if (incomeStatus <= 9408) {
            taxes = 0
        } else if (9409 <= incomeStatus && incomeStatus <= 14.532) {
            let y = (incomeStatus - 9408) / 10000
            taxes = (972.87 * y + 1400) * y
        } else if (14533 <= incomeStatus && incomeStatus <= 57051) {
            let y = (incomeStatus - 14532) / 10000
            taxes = (21202 * y + 2397) * y + 972.79
        } else if (57052 <= incomeStatus && incomeStatus <= 270500) {
            taxes = 0.42 * incomeStatus - 8963.74
        } else { //270501 <= incomeStatus
            taxes = 0.42 * incomeStatus - 17078.74
        }

    } else if (year.value === "2019") {
        if (incomeStatus <= 9168) {
            taxes = 0
        } else if (9169 < incomeStatus && incomeStatus < 14254) {
            let y = (incomeStatus - 9168) / 10000
            taxes = (940.14 * y + 1400) * y
        } else if (14255 <= incomeStatus && incomeStatus <= 55960) {
            let y = (incomeStatus - 14254) / 10000
            taxes = (21616 * y + 2397) * y + 965.58
        } else if (55961 <= incomeStatus && incomeStatus <= 265326) {
            taxes = 0.42 * incomeStatus - 8780.90
        } else { //265327 <= incomeStatus
            taxes = 0.42 * incomeStatus - 16740.68
        }
    }

    result.innerHTML = taxes.toFixed(2) + "€";


}