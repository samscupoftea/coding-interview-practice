// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

function capitalize(str) {
    const words = str.split(' ')
    // Example output will be ['this', 'is', 'mukhtar' ..etc]
    const result = [];

    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return result.join(' ');
}
let str = 'this is mukhtar';
console.log(capitalize(str));