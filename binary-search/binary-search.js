/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

var binarySearch = function(nums, target, low, high) {
    if (low > high) {
        return -1;
    }
    
    var midIndex = low + Math.floor((high - low) / 2);
    var midValue = nums[midIndex]
    
    if (midValue === target) {
        return midIndex;
    } 
    
    if (target < midValue) {
        return binarySearch(nums, target, low, (midIndex - 1))
    }  
    
    if (target > midValue) {
        return binarySearch(nums, target, (midIndex + 1), high)
    } 
     
    return -1
}

// Iterative approach
// ===============
// let search = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
    
//     while (low <= high) {
//         let mid = low + Math.floor((high - low) / 2)
//         let midValue = nums[mid]
        
//         if (midValue === target) {
//             return mid
//         }
        
//         if (target < midValue) {
//             high = mid - 1
//         } else {
//             low = mid + 1
//         }
//     }
    
//     return -1
// }
