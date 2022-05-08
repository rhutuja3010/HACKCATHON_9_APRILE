let n=require("readline-sync")
let want_to_unroll=n.questionInt("want to inroll for registration :")
let capacity=n.questionInt("enter the capacity of registration :")
let already_reg=n.questionInt("enter the already reg :")
while (true){
    if ((want_to_unroll+already_reg)<=capacity){
        console.log("yes")
        break
    }else{
        console.log("no")
        break
    }
}