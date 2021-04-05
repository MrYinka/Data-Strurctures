//Checking for Valid Subsequence of an array
//o(n) time complexity | o(1) space complexity

//Using a for loop
const subsequence = (array, sequence) => {
    let seqIdx = 0;
    for(let element of array){
        if(seqIdx == sequence.length){
            return true;
        }
        if(element == sequence[seqIdx]){
            seqIdx++;
        }
    }
    return seqIdx == sequence.length;
}

console.log(subsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));


//Using a while loop
const subSequence = (array, sequence) => {
    let arrIndex = 0;
    let seqIndex = 0;
    while(arrIndex < array.length && seqIndex < sequence.length){
        if(array[arrIndex] == sequence[seqIndex]){
            seqIndex++;
        }
        arrIndex++;
    }
    return seqIndex == sequence.length;
}

console.log(subSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));