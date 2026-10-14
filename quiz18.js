
let totalPurchase = 500000;
let payment = 500000;
let isMember = true;
let discount = 0;

if (isMember) {
    discount = totalPurchase * 0.10;
}

let finalAmount = totalPurchase - discount;

if (payment < finalAmount) {
    console.log("Insufficient payment");
} else {
    let change = payment - finalAmount;

    console.log("Discount: Rp" + discount);
    console.log("Final amount: Rp" + finalAmount);
    console.log("Change: Rp" + change);
}
