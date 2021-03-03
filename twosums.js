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

const twoSums = (array, targetSum) => {
    const nums = {};

    for(let element of array){
        const potentialMatch = targetSum - element;

        if(potentialMatch in nums){
            // return [potentialMatch, element];
        }else{
            nums[element] = true;
        }
    }

    return [];
    
}




