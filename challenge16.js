// Task 2: Linear Search and Hashmaps
// Description: Write a function that finds the 
// first non-repeating character in a string using 
// linear search and hashmaps.

function firstNonRepeatingCharacter(str) {
    let charFrequency = {};
    for (let char of str) {
        if (charFrequency[char] === undefined) {
            charFrequency[char] = 1;
        } else {
            charFrequency[char]++;
        }
    }

    for (let char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }
    return null;
}

let str = "sam";
console.log(firstNonRepeatingCharacter(str)); // Output: "w"

