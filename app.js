//Question:1
// Write a program that takes a positive integer from user &
// display the following in your browser.

// var user = prompt("Enter a Floating positive number")
// // a. number
// var Number = user
// console.log("number:",Number)
// // b. round off value of the number
// const round = Math.round(user)
// console.log(round)
// // c. floor value of the number
// const floor = Math.floor(user)
// console.log(floor)
// // d. ceil value of the number
// const ceil = Math.ceil(user)
// console.log(ceil)



//Quesyion:2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// var user = prompt("Enter a Floating Negative number")
// // a. number
// var Number = user
// console.log("number:",Number)
// // b. round off value of the number
// const round1 = Math.round(user)
// console.log(round1)
// // c. floor value of the number
// const floor1 = Math.floor(user)
// console.log(floor1)
// // d. ceil value of the number
// const ceil1 = Math.ceil(user)
// console.log(ceil1)



//Question:3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var number = -4
const absolute = Math.abs(number)
console.log(`The absolute value of${number} is ${absolute}`)



//Question:4
const dice1 = Math.random() * 10
console.log("random dice value:", dice1)
const dice2 = Math.random() * 10
console.log("random dice value:", dice2)



//Question:5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
const coin1 = Math.floor(Math.random()*2)+1;
console.log(coin1)
if(coin1 === 1){
    console.log("random coin value: Tails")
}if(coin1 === 2){
    console.log("random coin value: Heads")
}



//Question:6
// Write a program that shows a random number between 1
// and 100 in your browser.
const Between1to10 = Math.random()*100
console.log(Between1to10)



//Question:7
// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
const input = prompt("Enter the weight")
const weight = parseInt(input)
console.log(`The weight of the user is ${weight} kilogram`)



//Question:8
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
const secretNumber = 4;

const uservalue = prompt("Enter the number between 1 to 10")
const userinput = parseInt(uservalue)
if(userinput === secretNumber){
    console.log("congratulation u have found the secret number")
}else{
    console.log("one more try")
}