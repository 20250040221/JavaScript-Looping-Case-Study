
let score = 90;
let attendance = 95;
let income = 4000000;
let isActive = true;

if (
    score >= 85 &&
    attendance >= 90 &&
    income <= 5000000 &&
    isActive
) {
    console.log("Full Scholarship");
} else if (
    score >= 75 &&
    attendance >= 80 &&
    income <= 8000000
) {
    console.log("Partial Scholarship");
} else {
    console.log("No scholarship");
}
