/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = str.toLowerCase().replace(/[^\w\s]|_/g, "");
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] == " ") {
      start++;
    }
    else if (s[end] == " ") {
      end--;
    }
    else if (s[start] != s[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

module.exports = isPalindrome;
