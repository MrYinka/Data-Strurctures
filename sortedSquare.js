const sortedSquaredArray = (array) => {

    const sortedSquare = new Array(array.length).fill(0);
    let smallValueIndex = 0;
    let largeValueIndex = array.length - 1;

    for(let i = array.length-1; i >= 0; i--){

        let smallValue = array[smallValueIndex];
        let largeValue = array[largeValueIndex];

        if(Math.abs(smallValue) > Math.abs(largeValue)){
            sortedSquare[i] = smallValue * smallValue;
            smallValueIndex++;
        }else {
            sortedSquare[i] = largeValue * largeValue;
            largeValueIndex--;
        }
    }

    return sortedSquare;
}
console.log(sortedSquaredArray([-4, 2, 3, 5, 6, 8, 9]));