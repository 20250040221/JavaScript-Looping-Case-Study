
let score = 55;
let attendance = 80;
let assignments = 90;
let passed = true;

if (score < 60) {
    console.log("Fail: Score is below 60");
    passed = false;
}

if (attendance < 75) {
    console.log("Fail: Attendance is below 75%");
    passed = false;
}

if (assignments < 80) {
    console.log("Fail: Assignments completed below 80%");
    passed = false;
}

if (passed) {
    console.log("Pass");
}
