// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("The divideByThree function.", () =>{
    test("takes a number as an argument and decides if the number is evenly divisble by three or not.", () =>{
        // We can declare test data as variables inside of the test() as below:
        // let ~~ var 
        var num1 = 15 // Expected output: "15 is divisible by three"
        var num2 = 0 // Expected output: "0 is divisible by three"
        var num3 = -7 // Expected output: "-7 is not divisible by three"
        expect(divideByThree(num1)).toEqual(`15 is divisible by three`)
        expect(divideByThree(num2)).toEqual(`0 is divisible by three`)
        expect(divideByThree(num3)).toEqual(`-7 is not divisible by three`)
        expect(divideByThree("")).toEqual(`Please enter a number`)
    })
})
// b) Create the function that makes the test pass.
// If the number can be evenly divisible by 3, this number should % 3 === 0.
// Using "if else" statement 
const divideByThree = (num) =>{
    if(typeof num !== `number`){
       return `Please enter a number`
    }else if(num % 3 == 0){
        return `${num} is divisible by three`
    }else if(num % 3 !== 0){
        return `${num} is not divisible by three`
    }
}
//Temp code for testing function manually/seperately.
//var myNum = 6
//console.log(divideByThree(myNum))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("The capitalizer function.", () =>{
    test("takes in an array of words and returns an array with all the words capitalized.", () =>{
        var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        
        var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

        expect(capitalizer(randomNouns1)).toEqual(['Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew'])
        expect(capitalizer(randomNouns2)).toEqual(['Temperature', 'Database', 'Chopsticks', 'Mango', 'Deduction'])

    })
})

// b) Create the function that makes the test pass.
const capitalizer = (arr) =>{
    //.map is very useful high-order function, it saves lot of time to loop through array.
    //.map(value, index, array)
    let eachItem = arr.map(value =>{
        return value[0].toUpperCase() + value.substring(1)
    })  
    //Only need value here, which is the value at each index of an array.
    
    //return eachItem.join(" ")//Output:Temperature Database Chopsticks Mango Deduction
    return eachItem
}   

console.log(capitalizer(["a", "eiljkjlj", "ienfnnf", "orln", "xil"]))//Debug need for test. 

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
// Vowels: a, e , i, o, u

describe("The vowel function.", () =>{
    test("takes in a string and logs the index of the first vowel.", () =>{
        var vowelTester1 = "learn" // Expected output: 1
        var vowelTester2 = "academy" // Expected output: 0
        var vowelTester3 = "challenge" // Expected output: 2

        expect(vowel(vowelTester1)).toEqual(1)
        expect(vowel(vowelTester2)).toEqual(0)
        expect(vowel(vowelTester3)).toEqual(2)
      
    })
})

// b) Create the function that makes the test pass.
// Loop though each letter in the string 
// condition will be true:  ||  ----> log out the index
const vowel = (str) =>{
    for(let i = 0;i < str.length;i++){//As string's property, str.length, not str.length()
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ){
            return i
        }
    } 
}   

// PASS  ./code-challenges.test.js
// The divideByThree function.
//   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (3 ms)
// The capitalizer function.
//   ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)
// The vowel function.
//   ✓ takes in a string and logs the index of the first vowel. (5 ms)

