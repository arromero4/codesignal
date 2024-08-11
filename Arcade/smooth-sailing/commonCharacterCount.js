// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length < 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length < 15.

// [output] integer

function solution(s1, s2) {
  let charCount = {}
  let charCommon = 0
  for(let char of s1){
      charCount[char] = (charCount[char] || 0) + 1
  }
      
  for(let char of s2){
      if(charCount[char] > 0){
          charCommon++
          charCount[char]--
      }
  }
  return charCommon
}
