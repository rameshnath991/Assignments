//given the array, calculate sum of odd numbers using reduce method
const arr =[4,2,3,5]
let sum = 0
arr.reduce((sum, item)=>{
      if(item % 2 !=0)
    sum = sum + item
    return sum
   },0)
  