const addThree = (num) => {
  // Woohoo 🎉 Congrats on the beginning of your coding challenge Zach!
  // For this first function it should return the number passed in plus three
  // Zach's code here
  return num + 3;
};
console.log(addThree(3));

const divideByThree = (num) => {
  /* Returns the passed in number argument divided by three. */
  // Zach's code here
  return num / 3;
};
console.log(divideByThree(3));

const averageOfTwo = (num1, num2) => {
  /* Returns the average of two numbers, num1 and num2. */
  // Zach's code here
  const total = num1 + num2;
  return total / 2;
};
console.log(averageOfTwo(5, 6));

const averageOfAny = (nums) => {
  /* Takes in an array of nums [2,3,4,5]. The function should return the average of all of
    the numbers. */
  // Zach's code here

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total / nums.length;
};
console.log(averageOfAny([2, 3, 4, 5]));

const doubler = (nums) => {
  /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
  // Zach's code here
``
  let arrayDoubled = []

  for (let i = 0; i < nums.length; i++){
    const numDoubled = nums[i]*2
    arrayDoubled.push(numDoubled)
  }

  return arrayDoubled;

};
console.log(doubler([1,2,3]))


const combineArrays = (arr1, arr2) => {
  /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
  // Zach's code here

  const arr3 = arr1.concat(arr2);
  return arr3;  

};
console.log(combineArrays([1,2,3], [4,5,6]))

const wordWithinArray = (word, arr) => {
  /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
  // Zach's code here

  // method 1
  // for (let i = 0; i  < arr.length; i++){
  //   if (arr[i] === word) {
  //       return true
  //   }
  // }
  // return false

  // method 2
  if (arr.indexOf(word) === -1) {
  return false;
  }
  else {return true}
};
console.log(wordWithinArray("Hi",["Hey","Hello","Hi"]))

const echo = (str) => {
  /* Takes in a string and returns that string "echo-ized". E.g. 
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
  // Zach's code here
  const allCaps = str.toUpperCase();
  const original = str;
  const noCaps = str.toLowerCase();

  return `${allCaps} ... ${original} ... ${noCaps}`
};
console.log(echo("Zach!"))

const fizzBuzz = (max) => {
  /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
  // Zach's code here

  let contains = []

  for (let i = 1; i < max; i++){

    if ((i % 5 === 0 || i % 3 === 0) && !(i % 5 === 0 && i % 3 === 0)){
      contains.push(i)
    }

  }
  return contains

};
console.log(fizzBuzz(20))

const hello = (name) => {
  /* Takes in a string name and returns a string saying "Hello, " to that name. */
  // Zach's code here
  return `Hello, ${name}`
};
console.log(hello("Zach"))

const goodbye = (name) => {
  /* Takes in a string name and returns a string saying "Bye, " to that name. */
  // Zach's code here
  return `Bye, ${name}`
};
console.log(goodbye("Zach"))

const isFive = (num) => {
  /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
  // Zach's code here
  if (num === 5){
    return true
  }
  return false
};
console.log(isFive(5))

const isOdd = (num) => {
  /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
  // Zach's code here
  if (num % 2 === 1){
    return true
  }
  return false
};
console.log(isOdd(35))

const isSubString = (searchString, subString) => {
  /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. hint look up the includes() method. */
  // Zach's code here
};

const aCounter = (word) => {
  /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */
    count = 0;
  for (let i = 0; i < word.length; i++){
    if (word[i] === "a" || word[i] === "A"){
      count++
    }
  }
  return count
};
console.log(aCounter("Arianna"))


module.exports = {
  addThree,
  divideByThree,
  averageOfTwo,
  averageOfAny,
  doubler,
  combineArrays,
  wordWithinArray,
  echo,
  fizzBuzz,
  hello,
  goodbye,
  isFive,
  isOdd,
  isSubString,
  aCounter,
};
