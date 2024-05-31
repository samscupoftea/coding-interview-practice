// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const charMapA = {}
    string = stringA.toLowerCase().replace(/[\W]/g, '')

    for (let char of stringA) {
        charMapA[char] = ++charMapA[char] || 1;
    }
    return charMapA;
}


console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));