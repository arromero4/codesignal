// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string inputString

// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.
function solution(inputString) {
  let left = 0
  let right = inputString.length - 1
  
  while(left < right){
      if(inputString[left] !== inputString[right]) return false
      left++
      right--
  }
  return true
}
