module.exports = function toReadable (number) {
    let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let first_dozen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let big_dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let dozens = [Math.trunc(number / 100), Math.trunc(number % 100 / 10), number % 10];
    let result = "";

    if(dozens[0]) result += `${numbers[dozens[0] - 1] + " hundred "}`;

    if(dozens[1] > 1) result += big_dozens[dozens[1] - 2] + " ";
    if(dozens[1] === 1) result += first_dozen[dozens[2]];
    if(dozens[1] !== 1 && dozens[2]) result += numbers[dozens[2] - 1];
    
    if(result[result.length - 1] == " ") result = result.slice(0, -1);
    if(result === "") result += "zero";

    return result;
}