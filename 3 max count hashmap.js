// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
//1. Create empty charCount 
// 2. Loop using for in over each char of the str
//  3. Create variable for counting and for maxCount. 
//.   4. update counting each time a letter is seen in map. 
//.     5. Update maxCount - Checking if counting is > than maxCount. 
//.       6. Return max count 



function maxChar(str) {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char] = charCount[char] + 1
        } else {
            charCount[char] = 1
        }

    }

    return charCount
}
let str = "aabbbbbbbbbbc";
console.log(maxChar(str));
//HASHMAP

// let strCharCount = {
//     a: 2,
//     b: 10,
//     c: 1,
// }