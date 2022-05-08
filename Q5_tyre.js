let n=require("readline-sync")
let car=n.questionInt("how many car :")
let bike=n.questionInt("how many bike :")
let total_tyre=car*4+bike*2
if (total_tyre>0){
    console.log(total_tyre," :tyre on road")
}else{
    console.log("no")
}