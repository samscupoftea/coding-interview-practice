
// 1. Write code to get array of names from given array of users
//
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    },
];

// const names = users.map((user) => user.name);
// const activeUsers = users.map((user) => user.isActive);

const activeUsers = [];
users.forEach((user => {
    activeUsers.push(user.isActive);
}));


// console.log("Names:", names)
console.log("Active Users:", activeUsers)




// const names = [];
// users.forEach((user => {
//     names.push(user.name);
// })

// let names = [];
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
// }

// console.log("Names:", names);

















































// CHALLENGE 1
// MERGE SORTED ARRAYS 
// you are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

//BRUTE FORCE METHOD. NOT TIME OR SPACE EFFICIENT. 

function mergeSortedArrays(nums1, m, nums2, n) {
    sortedArray = [];
    for (let i = 0; i < m; i++) {
        sortedArray.push(nums1[i]);
    }
    for (let j = 0; j < n; j++) {
        sortedArray.push(nums2[j]);
    }
    sortedArray.sort((a, b) => a - b);
    for (let k = 0; k < sortedArray.length; k++) {
        nums1[k] = sortedArray[k];
    }
    return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(mergeSortedArrays(nums1, m, nums2, n));
// Output: [1, 2, 2, 3, 5, 6]




//BINARY SEARCH 

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};





//TWO SUM 

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
    if (nums.length < 2) {
        return "Not enough numbers";
    }
    let numMap = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        } else {
            numMap[nums[i]] = i;
        }
    }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



// 26. REMOVE DUPLICATES FROM SORTED ARRAY 

// Given an integer array nums sorted in non-decreasing order, remove the
//  duplicates in-place such that each unique element appears only once. 
//  The relative order of the elements should be kept the same. Then return 
//  the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, 
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the
//  unique elements in the order they were present in nums initially. The remaining
//   elements of nums are not important as well as the size of nums.
// Return k.

function removeDuplicates(nums) {
    let index = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[index] = nums[i + 1]
            index++
        }
    }
    return index;
};



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



//Given a string, return a new string with the reversed
//order of characters
//-- Examples ('hi') === 'ih'
// reverse ('hello') === 'olleh'
// reverse ('sam') === 'mas' 
// reverse ('CodingMoney) === 'yenoMgnidoC'

//We could use a backwards for loop.
//This could iterate through each char of str 
// For each char, I could push it into an empty string? 


//Things I need to remember 1. empty string 2. backwards for loop 3. add elements into string using +=; 
// return the new string 
function reversePalindrome(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if (newStr === str) {
        return true;
    } else {
        return false;
    }
};


console.log(reversePalindrome(str));

// More efficient way

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse(str));

//PALLINDROME 

function palindrome(str) {
    if (str === str.reversed) {
        return true;
    } else {
        return false;
    }

}

console.log(palindrome("sas"));




//Given a string, return the most common character that appears in the string. 
// iterare through the string, char by char. 
//populate a empty hashmap with each char. For each char, check - is char in hashmap ? If yes = add counter ++ 
// If not, 1; 
// Iterate over the hashmap, this time check how many instances of each char there is. B should have the highest instance, 
// therefore we return 'b'

function mostCommon(str) {
    let charMap = {};
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++

        } else {
            charMap[char] = 1;
        }
    }

    let maxChar = 0;
    let mostCommon = '';
    for (let char in charMap) {
        if (charMap[char] > maxChar) {
            maxChar = charMap[char];
            mostCommon = char;
        }
    }

    return mostCommon;


}

const str5 = "abbbacd";
//Output = "b"; 


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

function reverseStr(string) {
    let reversedStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr.push(string[i]);
    }
    return reversedStr;

}
//1. Create empty string
//2. Create backwards for loop. 
//3. Push each i into empty string
//4. Return the new string. 

let string = 'will';
console.log(reverseStr(string));
