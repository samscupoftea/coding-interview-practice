
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {


}


// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'




function reversedStr(string) {
    let reversedStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    return reversedStr;

}
//1. Create empty string
//2. Create backwards for loop. 
//3. Push each i into empty string
//4. Return the new string. 
let string = 'will';
console.log(reversedStr(string));

