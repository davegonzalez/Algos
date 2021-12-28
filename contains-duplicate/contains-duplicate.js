/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var keeper = {}
    
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]
        
        if (keeper[num]) {
            return true;
        } else {
            keeper[num] = true
        } 
    }
    
    return false
};