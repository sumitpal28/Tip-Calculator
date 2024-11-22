let billinput = document.getElementById("bill");
let tipop = document.getElementById("tip");
let tipcalbtn = document.getElementById("calculate");

let tipamount = document.getElementById("tip-amount");
let totalamount = document.getElementById("total-amount");


tipcalbtn.addEventListener("click", function(){
    let bill = parseFloat(billinput.value);
    if(isNaN(bill) || bill <= 0){
        alert("please enter a valid amount.")
        return;
    }
    let tip = parseFloat(tipop.value);
    let tips = (bill * tip) / 100;
    let totalbill = bill + tips;
    tipamount.textContent = `Tip Amount:  ${tips.toFixed(2)}`;
    totalamount.textContent = `Total Amount:  ${totalbill.toFixed(0)}`;
})



