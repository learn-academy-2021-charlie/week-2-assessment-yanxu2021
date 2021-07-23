// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer:[C,h,a,r,l,i,e,2,0,2,1]<---- return array with strings--->"c","h","a".....continue.
// b) Verify and explain:The output: [
//   'C', 'h', 'a', 'r',
//   'l', 'i', 'e', ' ',
//   '2', '0', '2', '1'
// ]
// The split() method divides a string into an ordered list of substrings, puts these substrings into an array, and returns a array.


// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
//  `Hello, ${name}!`
}

console.log(greeter("LEARN Student"))//Fixed--->output: Hello, LEARN Student!

// a) Your answer:Possibly will be syntax error, should have key word: return before the string.
// b) Verify and explain: The output: undefined.
//"undefined" --> A variable that has not been assigned a value is of type undefined. 
// A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
// A function returns undefined if a value was not returned.---------> need "return"


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: As expected, the output: [ 8, 10, 12, 14, 16 ]
// The .map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The .map() method does not change the original array. 


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer:[12, 14]
// b) Verify and explain: As expected, the output: [ 12, 14 ]
// The .filter() method creates an array filled with all array elements that pass a test(provided by a function). 
// The .filter() method does not execute the function for empty array elements.
// The .filter() method does not change the original array. 
// value % 2 ===0, only picked/filtered even numbers.
// To fix this output, 

var oddsOnly2 = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)// Not eaual (!==) operator
console.log(oddsOnly2)// The output as expected: [ 11, 13, 15 ]

// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }

  hello(){
    return `Hello`
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer:Learn { student: 'George', cohort: 'Charlie', year: 2021 }
// b) Verify and explain: output as expected: Learn { student: 'George', cohort: 'Charlie', year: 2021 }
// The output will be all attributes(data) because of console.log(learnStudent). Here use "new" to create an instance of "Learn".  
// Try different output to see how it works.
console.log(learnStudent.student)//Output: George
console.log(learnStudent.cohort)//Output: Charlie
console.log(learnStudent.year)//Output: 2011
console.log(learnStudent.hello())//Output: Hello--->To console.log the behavior(method), we need call that method. 
