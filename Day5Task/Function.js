// //1a)Print odd numbers in an array
// function oddNum(array){
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


// //1b)Convert all the strings to title caps in a string array

// var arr=["hi guvi"]
// var arr=arr.toString();
// function ToUpcase(arr1){
// arr=arr.toUpperCase();
// return arr;

// }
// console.log(ToUpcase(arr));

// //1c)Sum of all numbers in an array
// function sumArray(array){
//     let  sum=0;
//     for(let i=0;i<array.length;i++)
//     {
//         sum+=(array[i]);
        
//     }
//     console.log(sum);
//     return sum
//   }
//   sumArray([1,2,3,4,5]);
  

// //1d)Return all the prime numbers in an array


// var i=0;
// let primearr=[];
// function primefind(arr){
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

//1E) returning array of palindromes

// function checkPalindrome(arr){
//   var len =arr.length;
//  var start = arr.toString(0,Math.floor(len/2)).toLowerCase();
//  var end=arr.toString(len - Math.floor(len/2)).toLowerCase();
//  var flip=end.split('').reverse().join('');
//  return(flip === start);
 
//    } 
//  function  palindromeArray (array){
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
 

// 1F) median of an two sorted array
// function medianofArr(arr1,arr2){
//     resArr=[];
//     n1=arr1.length;
//     n2=arr2.length;
//     for(i=0,j=0;i<n1 || j<n2;)
//     {
//         if(arr1[i]<arr2[j])
//         {
//           resArr.push(arr1[i]);
//           i++;
//         }
//         else if(arr1[i]>arr2[j])
//         {
//           resArr.push(arr2[j]);
//           j++;
//         }
//         else{
//             if(i<n1)
//         {
//           resArr.push(arr1[i]);
//           i++;
//         }
//          if(j<n2){
//           resArr.push(arr2[j]);
//           j++;
//         }
//     }}
//     var n= resArr.length;
    
//      var median = ( resArr[n/2] + resArr[(n/2)-1])/2;
//     console.log(median);
        
//     }
//     medianofArr([1,12,15, 26, 38],[2,13,17,30,45]);

//1G)remove duplicates from an array
// function removeDuplicate(arr){
//    return arr.filter((ele,index) => (arr.indexOf(ele)===index));

//     }
//     console.log(removeDuplicate(["apple", "mango", "apple",
//     "orange", "mango", "mango","pineapple"]));
// let arr1 = [1,12,15, 26, 38];

// let arr2 = [2,13,17,30,45];

//1F) median of an sorted Array;
// function medianofArr(arr1,arr2){
//     resArr=[];
//     n1=arr1.length;
//     n2=arr2.length;
//     for(i=0,j=0;i<n1 || j<n2;)
//     {
//         if(arr1[i]<arr2[j])
//         {
//           resArr.push(arr1[i]);
//           i++;
//         }
//         else if(arr1[i]>arr2[j])
//         {
//           resArr.push(arr2[j]);
//           j++;
//         }
//         else{
//             if(i<n1)
//         {
//           resArr.push(arr1[i]);
//           i++;
//         }
//          if(j<n2){
//           resArr.push(arr2[j]);
//           j++;
//         }
//     }}
//     var n= resArr.length;
    
//      var median = ( resArr[n/2] + resArr[(n/2)-1])/2;
//     console.log(median);
// }   
    
//     medianofArr([1,12,15, 26, 38],[2,13,17,30,45]);