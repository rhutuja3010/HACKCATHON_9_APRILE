let n=require("readline-sync")
let num=n.questionInt("enter trhe number :")
let store=false
while(num!=0){
    modulus=num%10
    if(modulus==0 || modulus==5){
        store=true
        break
    
    }
    n=Math.floor(n/10)
    
}
if(store){
    console.log("yes")
}else{
    console.log("no")
}
