const numbers = [11,4,6,23,67,33,16,76,23,17,56,3,193,48];
const target = 93;

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>target) {
            continue;
        }
        for (let j = i +1; j < nums.length; j++) {
            if (nums[j]>target) {
                continue;
            } else {
                if (nums[i]+nums[j]===target){
                    return [i,j];
                } 
            }
        }

    }
}

console.log(twoSum(numbers, target));