'use strict';

let input = [];
let resultString = "";
const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let resultArray = [];
function convert (input) {
    for (let i = 0; i < input.length; i++) {
        let convertedString = "";
        if (parseInt(input[i]) >= 0) {
            for (let j = 0; j < input[i].length; j++) {
                let tmp = input[i].charAt(j) - '0';
                convertedString = convertedString.concat(words[tmp % words.length]);
            }
            resultArray.push(convertedString);
        } else {
            for (let j = 1; j < input[i].length; j++) {
                let tmp = input[i].charAt(j) - '0';
                convertedString = convertedString.concat(words[tmp % words.length]);
            }
            convertedString = "negative" + convertedString;
            resultArray.push(convertedString);
        }

    }
}

for (let i = 2; i < process.argv.length; i++) {
    input.push(process.argv[i]);
}

convert(input);
for (let i = 0; i < resultArray.length - 1; i++) {
    resultString = resultString + resultArray[i] + ",";
}
console.log( resultString + resultArray[resultArray.length - 1])
