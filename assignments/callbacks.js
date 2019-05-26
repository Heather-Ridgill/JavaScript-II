// Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works 
//with our items array.  Study both the problem and the solution to figure out the rest 
//of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//1
// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
return cb(arr.length);
}
getLength(items, function(length){
  console.log(length)
});

//2
    // last passes the last item of the array into the callback.
    function last(arr, cb) {
      return cb(arr[arr.length - 1]);
    }	
     last(items, function(x){
      console.log(x);
    });

//3
// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums (50, 3, function(x){
  console.log(x);
});

//4
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
 return cb(x * y);
}

multiplyNums (6, 6, function(x){
  console.log(x);
});


//5

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  function contains(item, list, cb) {
    for (i = 0; i < list.length; i++) {
      if (list[i] === item) {
        return cb(true)
      } 
    }
  
    return cb(false);
  }
  
  contains("Gum", items, containsItem => console.log(containsItem));
  

/* STRETCH PROBLEM */


  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
// }
// function removeDuplicates(array, cb) {
// let arr = [];

// for(let i = 0; i < array.length; i++){
//  if(arr.indexOf(array[i]) === -1){
//    arr.push(array[i]);
//  }
// }
// return cb(arr);
// }	

// removeDuplicates(items, function(x){
// console.log(x);
// });
