//Non-Constructible Change --- Minimum amount that can't be created!
// Given an array: [1,2,5] --- The minimum amount that can't be created is 4. Because no element can add up to 4


const ncc = (coins) => {
    coins.sort((a,b) => a - b);
    let change = 0;
        for(let coin of coins){
            if(coin > change + 1){
                return change + 1;
            }
            change+=coin;
        }

        return change + 1;
}


console.log(ncc([1,2,5]));