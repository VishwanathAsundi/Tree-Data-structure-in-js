// array implementation of Heap sort
function sort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    let t = arr[0];
    arr[0] = arr[i];
    arr[i] = t;

    heapify(arr, i, 0);
  }
}
function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest != i) {
    let t = arr[largest];
    arr[largest] = arr[i];
    arr[i] = t;

    heapify(arr, n, largest);
  }
}
function printArray(arr) {
  for (i = 0; i < arr.length; i++) {
    document.write(arr[i], " ");
  }
}
var arr = [5, 12, 11, 13, 4, 6, 7];
document.write("<br/>Input :");
printArray(arr);
sort(arr);
document.write("<br/>output :");
printArray(arr);
