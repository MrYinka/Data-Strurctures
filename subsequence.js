//Valid Subsequence of an array

//Checking if sequence is a valid subsequence of array.
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

//o(n) time complexity | o(1) space complexity
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

