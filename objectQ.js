// Question5. Write a Python script to concatenate following dictionaries to create a new one.
// Sample Dictionary :
// let d1=dic1={1:10, 2:20}
// let d2=dic2={3:30, 4:40}
// let d3=dic3={5:50,6:60}
// for (i in d1){
//     d3[i]=d1[i]
//     for(i in d2){
//         d3[i]=d2[i]
//     }
// }console.log(d3)


// Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
// Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}


// obj=[{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
// let a=[]
// for (i in obj){
//     // console.log(obj[i])
//     for (j in obj[i]){
//         if (!a.includes(obj[i][j]))
//         a.push(obj[i][j])
//         // console.log((obj[i]))
//     }
// }console.log(a)


// Question10. Write a Python program to combines two or more dictionaries, creating a list of 
// values for each key.
// Sample Output:
// Original dictionaries:
// {'w': 50, 'x': 100, 'y': 'Green', 'z': 400}
// {'x': 300, 'y': 'Red', 'z': 600}
// Combined dictionaries, creating a list of values for each key:
// {'w': [50], 'x': [100, 300], 'y': ['Green', 'Red'], 'z': [400, 600]}


