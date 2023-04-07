function heapSort(arr){
  for(let i = Math.floor(arr.length/2) ; i>=0 ; i-- ){
    heapify(arr,i,arr.length)
  }
  //extract root to last
  for(let i = arr.length-1; i > 0 ; i--){
    [arr[0],arr[i]] = [arr[i],arr[0]]
    heapify(arr,0,i)
  }
  return arr;
}

function heapify(arr,i,n){
  let largest = i;
  let left  = 2*i+1;
  let right = 2*i+2;

  if(left < n && arr[left] > arr[largest]){
    largest = left
  }
  if(right < n  && arr[right] > arr[largest]){
    largest = right
  }
  if(largest !==i){
    [arr[largest],arr[i]] = [arr[i],arr[largest]]
    heapify(arr,largest,n)
  }
}

let arr = [12,45,78,98,64,62,32]

console.log(heapSort(arr))