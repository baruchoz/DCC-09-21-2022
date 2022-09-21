/*
Leetcode 345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = /[aeiou]/i;
  const arr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (arr[left].match(vowels) && arr[right].match(vowels)) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (arr[left].match(vowels)) {
      right--;
    } else {
      left++;
    }
  }
  return arr.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
