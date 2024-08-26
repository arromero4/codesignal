// Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

// Example

// For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
// solution(strings, patterns) = true;
// For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
// solution(strings, patterns) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.string strings

// An array of strings, each containing only lowercase English letters.

// Guaranteed constraints:
// 1 ≤ strings.length ≤ 105,
// 1 ≤ strings[i].length ≤ 10.

// [input] array.string patterns

// An array of pattern strings, each containing only lowercase English letters.

// Guaranteed constraints:
// patterns.length = strings.length,
// 1 ≤ patterns[i].length ≤ 10.

// [output] boolean

// Return true if strings follows patterns and false otherwise.

function solution(strings, patterns) {
  let stringToPattern = {}
  let patternToString = {}
  
  for(let i=0; i < strings.length;i++){
      let str = strings[i]
      let pat = patterns[i]
      
      //revisamos si ya existe el string en el map
      if(stringToPattern[str] === undefined){
          stringToPattern[str] = pat
      }else if(stringToPattern[str] !== pat){
          return false //no coincide el patron
      }
      //revisamos si ya existe el pattern en el map
      if(patternToString[pat] === undefined){
          patternToString[pat] = str
      }else if(patternToString[pat] !== str){
          return false //no coincide el patron
      }
      
  }
  console.log(stringToPattern)
  console.log(patternToString)
  return true
}
