let n=require("readline-sync")
let x=n.questionInt("enter the first cab service :");
let y=n.questionInt("enter the second cab service :");
if (x>y){
    console.log(y," :second cab is cheaper")
}else if(x===y){
    console.log("both cab service are same")
}else{
    console.log(x," :first cab is cheaper")
}

