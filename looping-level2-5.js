const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let scores = [];
let index = 0;

function askScore() {
    rl.question(`Enter score for student ${index + 1}: `, function(input) {
        let score = Number(input);

        if (input.trim() === "" || !Number.isFinite(score) ||
            score < 0 || score > 100) {
            console.log("Enter a score between 0 and 100.");
            askScore();
            return;
        }

        scores.push(score);
        index++;

        if (index < 10) {
            askScore();
        } else {
            let sum = 0;
            let passed = 0;
            let failed = 0;
            let highest = scores[0];
            let lowest = scores[0];

            for (let i = 0; i < scores.length; i++) {
                sum += scores[i];

                if (scores[i] >= 75) {
                    passed++;
                } else {
                    failed++;
                }

                if (scores[i] > highest) highest = scores[i];
                if (scores[i] < lowest) lowest = scores[i];
            }

            console.log("Average:", sum / scores.length);
            console.log("Passed students:", passed);
            console.log("Failed students:", failed);
            console.log("Highest score:", highest);
            console.log("Lowest score:", lowest);

            rl.close();
        }
    });
}

askScore();