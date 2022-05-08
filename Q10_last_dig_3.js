// Question 10 Take a user input and display the last digit of the number and 
// check if the last digit of the number is 3 or not?



let n=require("readline-sync")
let num=n.questionInt("enter the number :")
let modulus=num%10
if (modulus===3){
    console.log("yes")
}else{
    console.log("no")
}