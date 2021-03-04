const array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;

// O(n^2)ST Complexity
const twoSums = (array, targetSum) => {
    for(let i = 0; i< array.length -1 ; i++){
        const firstnumber = array[i];
            for(j = i+1; j < array.length; j++){
               const secondnumber = array[j];
               if(firstnumber + secondnumber == targetSum){
                   return [firstnumber, secondnumber];
               } 
            }
    }

    return [];
}



// O(n)ST Complexity
const twoSum = (nums, target) => {

    let store = {};

    for(let i = 0; i< nums.length; i++){
        if(store[nums[i]] !== undefined){
            return [store[nums[i]], i];
        }
        store[target-nums[i]] = i;
    }
    return [];
};
















