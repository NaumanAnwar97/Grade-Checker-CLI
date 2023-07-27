// Function 
function greeting() {
    console.log("this is greeting function");
}
greeting();
// Types
/* 1- input, no return
   2- no input, but return values
   3- input, return  */
function greetings(useName) {
    console.log(`My name is ${useName}`);
}
greetings("Nauman");
// Arrow Function 
let sum = () => (console.log("Here is the return value", 5 + 15));
let sum2 = () => { console.log("Here is the return value", 5 + 15); };
// ===========================================================================
/* Find the index of missing numbers in the list*/
let x = [21, 25, 27, 29, 32];
// return list of missing index
function findMissingNumbersIndices(inputList) {
    const result = [];
    for (let i = 0; i < inputList.length - 1; i++) {
        const currentNumber = inputList[i];
        const nextNumber = inputList[i + 1];
        const diff = nextNumber - currentNumber;
        if (diff > 1) {
            for (let j = 1; j < diff; j++) {
                const missingNumber = currentNumber + j;
                const missingIndex = i + j;
                result.push({ number: missingNumber, index: missingIndex });
            }
        }
    }
    return result;
}
// Test the function with the provided input:
console.log(findMissingNumbersIndices(x));
console.log();
export {};
