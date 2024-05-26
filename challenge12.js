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

