//Two Number Sum Algorithm
// O(n^2) space, time Complexity
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

console.log(twoSums([3, 5, -4, 8, 11, 1, -1, 6], 10));


//o(n) space, time complexity
//Returning the array elements
const twoSums = (array, target) => {
    let storageObject = {};

    for(let element of array){
        if(storageObject[element] !== undefined){
            return [storageObject[element], element];
        } else{
            storageObject[target - element] = element;
        }
    }

    return [];
};

console.log(twoSums([3, 5, -4, 8, 11, 1, -1, 6], 10));

//Returning the array index
const twoSum = (arr, targetSum) => {
    let hashMap = {};

    for(let i=0; i<arr.length; i++){
        if(hashMap[arr[i]] !== undefined){
            console.log(hashMap);
            return [hashMap[arr[i]], i];
        } else{
            hashMap[targetSum - arr[i]] = i;
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));
















