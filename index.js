//froyo flavors "vanilla, vanilla, strawberry, coffee"
//count how many ice cream they ordered

//1. Froyo type
const froyoflavor = prompt(
    "Enter Froyo Flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const userResponseArr = froyoflavor.split(',');

//2.Return the flavor count 
function returnTable(arr) {
    const hashTable = {};
    for (let i = 0; i <arr.length; i++){
        const item = arr[i];

        if (hashTable[item] === undefined) { 
            hashTable[item] = 1;
        } else{
            hashTable[item] += 1;
        }
    }
        return hashTable;
    }
console.log(returnTable(userResponseArr));
