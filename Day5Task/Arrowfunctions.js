//3a)Print odd numbers in an array
// const oddNum=(array)=>{
//     let res=[];
//     for(i=0;i<array.length;i++)
//     {
//         var arr=array[i];
       
//         if(arr%2 ===1)
        
//         {
//            console.log(arr);
           
//         res.push(arr);
          
//         }
      
//     }
//   return res; 
// }
// oddNum([22,23,21,4,6]);


// //3b)Convert all the strings to title caps in a string array

// var arr=["hi guvi"]
// var arr=arr.toString();
// const ToUpcase=(arr1)=>{
// arr=arr.toUpperCase();
// return arr;

// }
// console.log(ToUpcase(arr));


// //3c)Sum of all numbers in an array
// const sumArray=(array)=>{
//     let  sum=0;
//     for(let i=0;i<array.length;i++)
//     {
//         sum+=(array[i]);
        
//     }
//     console.log(sum);
//     return sum
//   }
//   sumArray([1,2,3,4,5]);
  

 //3d)Return all the prime numbers in an array

//  var i=0;
// let primearr=[];
// const primefind=(arr)=>{
//     for(var num of arr){
//     if( num === 2)
//     {
//         primearr[i]=num;
//         i++;
//     }
//     else if(num >2)
//     {
//         var flag=true;
//         for(j=2;j<=num/2;j++){
//             if(num%j ===0)
//             {
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             primearr[i]=num;
//             i++;
//         }
        
//     }
// }
// console.log(primearr);
// }
// primefind([2,3,4,5,6,7,8,9,11,13]);


//3E) returning array of palindromes

// const checkPalindrome=(arr)=>{
//   var len =arr.length;
//  var start = arr.toString(0,Math.floor(len/2)).toLowerCase();
//  var end=arr.toString(len - Math.floor(len/2)).toLowerCase();
//  var flip=end.split('').reverse().join('');
//  return(flip === start);
 
//    } 
//  const  palindromeArray= (array)=>{
//    let ans=[];
//    for(var i=0;i<array.length;i++)
//    {
//      if(checkPalindrome(array[i]))
//      {
//        ans.push(array[i]);
//      }
//    }
//    return ans;
//  }
//  console.log(palindromeArray(['redder','racecar','car','level']));
 