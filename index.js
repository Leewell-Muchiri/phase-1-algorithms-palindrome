function isPalindrome(word) {
  let reversedWord = word.split("").reverse("").join("");
  if (reversedWord === word) return true;

  return false

  console.log(isPand)

  // Write your algorithm here
}

/* 
  Add your pseudocode here
  declare a function
  make the function return true or false if a value is passed to check if it's a palindrome or not
*/

/*
  Add written explanation of your solution here
  My function should be able to pass words and if read either from the first letter to the last or the last to the first, they are the same. a "tot" can be read tot mean the same thing whether read from the start or from the end.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
