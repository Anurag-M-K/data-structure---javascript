
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    //it will completely iterate through array values
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left quicksort take three argument first one is an array  second one is starting index  and last ending index
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  console.log( quickSort([100,-3,2,4,6,9,0,1.2,1,2,5,3,23]))
  
  
  
  
  // [4,6,9,1,2,5,3]
  // [3,2,1,4,6,9,5]
  //        4
  //  3,2,1    6,9,5
  //      3      6
  //  2,1      5  9
  //    2
  //  1
  

// function quicksort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[0]
//     let left = [];
//     let right = [];

//     for(let i = 1 ; i<arr.length ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
       
//     }

//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// let arr = [4,87,9,95,65,97]


// console.log(quicksort([4,87,9,95,65,97]))
