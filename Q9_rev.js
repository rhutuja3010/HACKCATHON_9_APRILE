// Question 9  Take a user input of three-digit numbers and print their reverse 
// output. Ex. input  654
//        Output 456

let n=require("readline-sync");
let num=n.questionInt("enter the number :");
let a=(num%10)
let b=Math.floor(num/10)%10
let c=Math.floor(num/100)%10
let rev=(a*100)+(b*10)+(c*1)
if(num<=1000){
    console.log(rev)
}else{
    console.log("no")
}



