// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.
function solution(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1]
  
  for(let i=1;i<inputArray.length-1;i++){
      let product = inputArray[i] * inputArray[i+1]
      if(product>maxProduct){
          maxProduct=product
      }
  }
  return maxProduct
}
