
let hours = 5;
let fee = 0;

if (hours <= 0) {
    console.log("Invalid parking hours");
} else {
    fee = 5000 + (hours - 1) * 3000;

    if (fee > 20000) {
        fee = 20000;
    }

    console.log("Parking fee: Rp" + fee);
}
