
let username = "admin";
let password = "12345";
let isActive = false;

if (username !== "admin" || password !== "12345") {
    console.log("Invalid username or password");
} else if (!isActive) {
    console.log("Account inactive");
} else {
    console.log("Login successful");
}
