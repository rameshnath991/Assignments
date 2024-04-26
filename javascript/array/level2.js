const arr =  [3,5,2]
//console.log the maximum number of an array

//expectedd output 5

//console.log(Math.max(...arr))

console.log(arr.length);

// const max = Math.max(...arr);
// console.log(max);


//const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5
//expectedd output 5
const max = Math.max(...arr);
console.log(max);

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

 const AfterElementToRemove = arr.slice(0,2);
 console.log(AfterElementToRemove)
//const elementToRemove = 2;


//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
const NewArr = arr.filter(num => num !== 5);

//console.log(NewArr);

const MultiplyedBy5 = NewArr.map(AfterElementToRemove => AfterElementToRemove * 5); 

console.log(MultiplyedBy5);
 



//find intersection (common elements) of arr and arr2
//expected output: [5]

const arr2 = [5,21,32]

const intersection = arr.filter(value => arr2.includes(value));

console.log(intersection);

