// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. 

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

// a palindrome is essentially true if the string is the same reversed.
// create empty str
// loop backwards and push each element backwards. 
// Then compare new str to old and if same, return true. 

function isPalindrome(str) {
    let strInverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strInverted += str[i];
    } return strInverted === str;
}
let str = 'sam';
console.log(isPalindrome(str));












// function palindrome(str) {
//     let strInverted = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         strInverted += str[i];
//     }
//     return strInverted === str;

// }

// let str = "101";
// console.log(palindrome(str));