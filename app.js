// let arr=[1,2,3]
// let length=arr.push(4)
// // console.log(length)
// arr.pop()
// console.log(arr)




// let arr=[1,2,3]
// // arr.shift()
// arr.unshift(0,0.1)
// console.log(arr)



// map return square of ele
// let arr=[2,4,6]
// arr.map((ele)=>{
//     console.log(ele*ele)
// })



// filter to return even nums
// let arr=[1,2,3,4,5,6,7,8]
// arr.filter((ele)=>{
//     if(ele%2==0){
//         return console.log(ele)
//     }
// })



// // reduce to sum of ele
// let arr=[1,2,3,4,5,6,7]
// let sum=arr.reduce((acc,ele)=>{
//     return acc+ele
// },0)
// console.log(sum)




// find method 1st ele which is divisible by 7 and greather than 15
// let arr=[7,14,1,8,5]
// let result=arr.find((ele)=>{
//     return ele%7==0 && ele>15
// })
// console.log(result)



// some method check any eke smaller than 5
// let arr=[7,6,9]
// let result=arr.some((ele)=>{
//     return ele<5
// })
// console.log(result)



// check every ele is even
// let arr=[2,4,6,8]
// let result=arr.every((ele)=>{
//     return ele%2==0
// })
// console.log(result)



// sort an arr in ascending
// let arr=[4,5,3,7,8]
// let result=arr.sort((a,b)=>a-b)
// console.log(result)


// slice Q: Ek array [1,2,3,4,5] ka naya array banao jisme sirf middle 3 elements ho.
// let arr=[1,2,3,4,5]
// let new_arr=arr.slice(1,4)
// console.log(new_arr)


// splice Q: Ek array [1,2,3,4] me index 2 par number 99 insert karo.
// let arr=[1,2,3,4]
// arr.splice(2,0,99)
// console.log(arr)



// String " JavaScript Practice " ko trim karke uppercase me print karo.
// let str=" javascript "
// console.log(str.trim().toUpperCase())



// String "hello world" me "world" ko "JS" se replace karo.
// let str="hello world"
// console.log(str.replace("world", "js"))




// Check karo "racecar" palindrome hai ya nahi (split, reverse, join use karke)
// let str="recar"
// let replace=str.split("").reverse().join("")

// if(str==replace){
//     console.log(true)
// }else{
//     console.log(false)
// }


// let str="rcecar"
// let ispalindrome=true
// let start=0
// let end=str.length-1
// while(start<end){
//     if(str[start]!==str[end]){
//         ispalindrome=false
//         break
//     }
//     start++
// end--
// }
// if(ispalindrome){
//     console.log(true)
// }else{
//     console.log(false)
// }






// "I love JS" me "love" word ka index find karo aur console me print karo.
// let str="I love js"
// console.log(str.indexOf("js"))




// Number 7.56789 ko 2 decimal tak round karke print karo.
// let num=7.56789
// console.log(num.toFixed(2))