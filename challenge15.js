//Task 1: Array Manipulation
// Description: Write a function that rotates an array to the right by a given number of steps.

function rotateArray(arr, steps) {
    if (arr.length === 0 || steps.length === 0) {
        return arr;
    }

    steps = steps % arr.length;
    if (steps === 0) {
        return arr;
    }

    let rightPart = arr.slice(-steps);
    let leftPart = arr.slice(0, arr.length - steps);

    let rotateArray = rightPart.concat(leftPart);
    return rotateArray;

}



//EXAMPLE INPUTS 
let arr = [1, 2, 3, 4, 5];
let steps = 2;
console.log(rotateArray(arr, steps)); // Output: [4, 5, 1, 2, 3]

