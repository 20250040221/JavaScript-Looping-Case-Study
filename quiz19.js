
let password = "student123";

if (password.length < 8) {
    console.log("Too short");
} else if (password.length <= 11) {
    console.log("Moderate");
} else {
    console.log("Strong");
}

if (/\d/.test(password)) {
    console.log("Password contains a number");
} else {
    console.log("Password does not contain a number");
}
