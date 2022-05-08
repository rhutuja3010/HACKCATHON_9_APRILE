let n=require("readline-sync")
let c_volum=n.questionInt("enter enter current volume :")
let increase_v=n.questionInt("enter enter after increase volume :")
let count=0;
while(c_volum<increase_v){
    c_volum++
    count++
}
console.log(count)