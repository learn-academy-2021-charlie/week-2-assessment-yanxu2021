# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer:
  - 1st Try: Iteration is (code block) to repeat an operation at certain conditional (is true).
  - 2nd Try: Iteration is simply *the number of time/times* a loop can be executed, while a loop is the *code* which generate or causes expressions to be iterated iteration when the loop is executing.

  Researched answer:
  - In development, iteration is the process of performing a particular action a certain number of times or until a condition is met.
  - Many computer programs and programming languages use iterations to perform specific tasks, solve problems, and present solutions.
  - JavaScript has many types of loops. A common form of iteration is called a *for* loop. The for statement creates a loop that is executed as long as a condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.


2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: an array with index/value, array's value is required while the others are optional.<------The parameters' order does matter. value, index, array

  Researched answer:
  - .map(value, index, array)
  - .map() have three built-in parameters- the value, index, and array.
  - The value at each index of an array; The index of the array that we are iterating through(optional); The array that higher order function was called on(optional);
  - What the parameters are named is arbitrary, but the order will always be the same.
  - The .map() function iterates through an array and returns a new array of the same length.


3. What is object de-structuring?

  Your answer:The opposite operation of the initialization to separate each element of the object into individual variables. So, we can call or process them directly and easily as variables.

  Researched answer:
  - The de-structuring assignment is really just a special way of assigning variables in JavaScript.
  - The de-structuring *unpack* an object' values into individual variables.
  - When de-structuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables.


4. What is the difference between an object and a class?

  Your answer:A class is the blueprint of objects. Class is more abstract and object will be specific and usable as entity.

  Researched answer:
  - Class is a blueprint or template from which objects are created.
  - Classes define attributes(data) and behaviors(methods).
  - Classes themselves are not real things, but rather definitions of things. Class is a group of similar objects.
  - Object is a real world entity such as pen, laptop, bed, keyboard etc.  Object is a physical entity.


5. Why would you use the method super()?

  Your answer: super() method is used to inherited (properties) from "super" or parent class.//not properties. Classes define attributes(data) and behaviors(methods).-----> inherited **attributes(data).**

  Researched answer:within the constructor method we call super() method which passes the attributes from the constructor in the parent class.


6. STRETCH: What is hoisting in JavaScript?

  Your answer:Hoist means pull or lift. Hoisting in JavaScript means that we don't need worry about where we declare the variables or functions(initialization), once initialized, inevitably, you initialized them at the first place.

  Researched answer:
  - In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
  - Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
  - In JavaScript, *the default* action is for declarations to be moved to the top of the code by JavaScript interpreter. That means the top of the current function or scripts. All functions and variables are hoisted.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React:React is a free and open-source front-end JavaScript library/web platform for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.

2. React lifecycle methods: A series of events that happen from the birth of a React Component to its death. Every component in React goes through a lifecycle of events- birth, growth, and death.

3. React state: The heart of every React component is its "state", an object that determines how that component renders and behaves. In other words, "state" is what allows you to create components that are dynamic and interactive.

4. Component invocation/call: Invocation means the execution of a program or function. The term "invoke" is synonymous with call. React components can be considered literally JavaScript functions. we can invoke and call that component to implement functions we need.

5. DOM Events: DOM Events are a signal that something has occurred, or is occurring, and can be triggered by user interactions or by the browser. 
