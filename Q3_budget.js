let n=require("readline-sync")
let amount=n.questionInt("enter the amount :")
let spend_per_day=n.questionInt("enter the amount of spend_per_day :")
let budget=30*spend_per_day;
if(budget<=amount){
    console.log("yes")
}else{
    console.log("no")
}