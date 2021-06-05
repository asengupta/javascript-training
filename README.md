## Mnemonics Used
Evaluate the function and print the result = **EFPR** \
Write a Function Which = **WAFW**

## List your Node version
Run `node -v`
- It should be at least >=12

## Variables
- Create a variable using `var`. EFPR. Attempt to modify it.
- Create a `const` variable. Attempt to modify its value. EFPR. 

## Functions and Lambdas
- WFW which returns *the number you pass in* **plus 1**. EFPR.
- WFW which adds the string "Tron" to a string parameter. EFPR. 
- WFW which, given a string parameter, returns the last 3 characters of this string. EFPR.
- Higher Order Functions:
    - Create a function `f` which doubles a given number. EFPR.
    - Create a function `g` which halves a number. EFPR.
    - Create a function that accepts a number `n`, and returns `n+2n` or `n+n/2` depending on whether you pass in `f` or `g`. EFPR.
- Simplify `f` and `g` to their lambda forms.

## Looping and Recursing
- Create a function which returns the sum of numbers from 1 to `n`. EFPR.
- WFW goes into an infinite loop. EFPR.
- WFW returns the sum of numbers from 1 to `n` without using `for`. EFPR.

## Data Structures: Arrays
- Print out the contents of an array `numbers` (`[1,2,3,4,5,6,7,8,9,10]`) with the string `This is:` before each element, using `for`.
- Do the same as above without using `for`.

### Mapping
- WFW Double the elements of `numbers`. EFPR.
- WFW Find the remainder of all elements of `numbers` when divided by 2. EFPR.
- WFW Map `numbers` to `['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']`. EFPR.

### Filtering
- WFW returns all the even elements of `numbers`. EFPR.
- WFW returns an array containing every alternate element of `['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ]`, like `['a', 'c', 'e', 'g', 'i']`. EFPR.
- WFW finds the remainder of all elements of `numbers` when divided by 2. EFPR.
- WFW map `numbers` to `['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']`. EFPR.

### Reducing
- WFW returns the sum of all numbers in an array of numbers. EFPR.
- Implement `reduce` using recursion. EFPR.

## Data Structures: Objects
- Use this for reference:
```
const members = {
    "Duski": {
        nickname: "Grope Guru",
        age: 1
    },
    "Jess": {
        nickname: "Munted Bandit",
        age: 69
    },
    "Dexpair": {
        nickname: "Memelord",
        age: 420
    }
}
```
- Print out all the keys of `members`.
- Print out all the values of `members`.
- Print out all the entries of `members`.
- Print out Dexpair's entry in `members`.
- WFW adds 10 to every `age` in the object. EFPR.
- WFW adds 10 to every `age` in the object, without mutation. EFPR.

## General Coding Guidelines

- Use `const` for declaring variables.
- Avoid mutating maps and arrays in general.
- Use good names for functions.
- Don't make your functions too long.
