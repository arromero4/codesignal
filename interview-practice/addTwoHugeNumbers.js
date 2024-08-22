// addTwoHugeNumbers
// You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

// Example

// For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
// solution(a, b) = [9876, 5434, 0].

// Explanation: 987654321999 + 18001 = 987654340000.

// For a = [123, 4, 5] and b = [100, 100, 100], the output should be
// solution(a, b) = [223, 104, 105].

// Explanation: 12300040005 + 10001000100 = 22301040105.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] linkedlist.integer a

// The first number, without its leading zeros.

// Guaranteed constraints:
// 0 ≤ a size ≤ 104,
// 0 ≤ element value ≤ 9999.

// [input] linkedlist.integer b

// The second number, without its leading zeros.

// Guaranteed constraints:
// 0 ≤ b size ≤ 104,
// 0 ≤ element value ≤ 9999.

// [output] linkedlist.integer

// The result of adding a and b together, returned without leading zeros in the same format.


// Helper function to create a linked list from an array
function arrayToList(arr) {
  let head = null;
  let current = null;
  for (let num of arr) {
      let newNode = new ListNode(num);
      if (head === null) {
          head = newNode;
          current = head;
      } else {
          current.next = newNode;
          current = current.next;
      }
  }
  return head;
}

// Example 1
let a = arrayToList([9876, 5432, 1999]);
let b = arrayToList([1, 8001]);
let result = addTwoHugeNumbers(a, b);

// Print the result linked list
while (result !== null) {
  console.log(result.value);
  result = result.next;
}

// Example 2
a = arrayToList([123, 4, 5]);
b = arrayToList([100, 100, 100]);
result = addTwoHugeNumbers(a, b);

// Print the result linked list
while (result !== null) {
  console.log(result.value);
  result = result.next
}

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
  }
  return prev;
}

function addTwoHugeNumbers(a, b) {
  // Reverse both lists
  a = reverseLinkedList(a);
  b = reverseLinkedList(b);

  let carry = 0;
  let result = null;
  let lastNode = null;

  // Traverse both lists
  while (a !== null || b !== null || carry > 0) {
      let sum = carry;
      if (a !== null) {
          sum += a.value;
          a = a.next;
      }
      if (b !== null) {
          sum += b.value;
          b = b.next;
      }

      // Calculate new carry and current digit
      carry = Math.floor(sum / 10000);
      let digit = sum % 10000;

      // Create a new node for the result
      let newNode = new ListNode(digit);
      if (result === null) {
          result = newNode;
      } else {
          lastNode.next = newNode;
      }
      lastNode = newNode;
  }

  // Reverse the result list to get the correct order
  result = reverseLinkedList(result);

  return result;
}
