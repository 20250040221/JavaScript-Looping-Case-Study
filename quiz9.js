
let totalPurchase = 750000;
let discount = 0;

if (totalPurchase >= 1000000) {
    discount = 0.20;
} else if (totalPurchase >= 500000) {
    discount = 0.10;
} else if (totalPurchase >= 250000) {
    discount = 0.05;
}

let finalPrice = totalPurchase -
    (totalPurchase * discount);

console.log("Discount:", discount * 100 + "%");
console.log("Final price: Rp" + finalPrice);
