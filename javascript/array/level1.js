const arr = [3,5,2,]
//Q1 calculate length of array and console log
//expected output is 3
console.log (arr.length)


console.log(arr.join(''));



//Q2 reverse the array and console log
//expected output [2,5,3]
const reversed = arr.reverse()
console.log(reversed);

///Q3 join the array and console log
// expected output 352
console.log(arr.join(''));


//Q4 Remove the last element from the array and log the modified array to the console
const AfterElementToRemove = arr.slice(0,2);
 console.log(AfterElementToRemove)

// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,10,12]
// 
if (num.every((element) => element % 2 === 0)) {
   console.log("All even");
} else {
   console.log("Not all even");
}

// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3

const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;

 const index = allNum.indexOf(searchElement);
console.log(index); 
