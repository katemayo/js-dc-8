# Data Types, Operators, and Methods

## Learning Objectives
- Define what a program is and the purpose of programming
- Describe the importance of data and the role of programs in processing data
- Explain the need for different categories, or types, of data
- List the major data types in JavaScript and their purposes
- Describe the difference between syntax and semantics in a programming language
- List some of the basic rules of JavaScript syntax
- Explain the role of operators in a program
- List some basic JS operators and their roles
- Describe what methods are, and how they differ from operators
- Read documentation to discover some common methods


## What is programming? What is a program? (30 minutes)
- DISCUSSION: What is the purpose of programming?
- What is a program?
- Loosely, we can define a computer program as a set of instructions executed by a computer that can intake data, process that data somehow, and output data
- Without data, programs are pretty useless - if a program can't intake or produce data, it doesn't really serve a purpose
- So before we learn about how to write great programs, we need to learn about how we talk about and use data in a program
- A programming language is just a language that allows us to write a program - pretty circular definition, but it works

### Programming Languages
- Loose/weak/dynamically typed vs strict/strong/statically typed
- Interpreted vs compiled languages
- High level vs low level

## Data Types (35 minutes)
- QUESTION: why do we need to categorize data into different data types?

### Primitives (Immutable)
- Boolean
- Null
- Undefined
- Number
- String

### Complex (Mutable)
- Array
- Object

*BREAK* (5 minutes)

## Variables (20 minutes)
- Containers for holding data
- QUESTION: why might we want to use variables instead of literals all the time?
- Variables get declared when you use the `var` keyword. You should always use one of these keywords when declaring a new variable. If you don't the variable will be declared in the global namespace/scope (which is bad).
- It's common (but not required) to initialize a variable in the same statement as the declaration, by using the assignment operator `=`; `var name = 'Sean';` is an example of a declaration (`var name`) and an initialization `= 'Sean'` in one statement.
- BONUS: in ES6, there are 2 new keywords `let` and `const` that allow us to declare variables.
- Discuss how variable assignment relates to memory management, and how assignment changes what is in memory

## Operators (30 minutes)
- JavaScript is written as a series of expressions and statements that form instructions for the interpreter to execute
- Expressions are simply any bit of code that resolves to a value (an instance of data)
- Statements are a bit harder to pin down, but they are generally made up of expressions and sometimes some instructions connecting the expressions
- Operators are characters or sets of characters that perform some action on operands (values)
- You can think of operators as verbs and operands as nouns
- We can use operators to combine many operands into a large expression, or to chain many expressions together into a statement
- DOCUMENTATION HUNT: look through the MDN docs to find some common operators and their purposes

*BREAK* (5 minutes)

## Methods (30 minutes)
- Methods are similar to operators in that they are able to manipulate data - however, methods are different in that they are attached to a specific type of data
- Methods are often unique to the type of data they are associated with. The `toLowerCase` method, for example, only makes sense to use on a `string`. You can't lowercase a Number or a Boolean.
- DOCUMENTATION HUNT: look through the MDN docs to find some common methods and their purposes


## ADMIN: Set up homework submission process (20 minutes)
