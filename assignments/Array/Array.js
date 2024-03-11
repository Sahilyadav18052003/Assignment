const Array1 = [17, 19, 54, 1, 83];
const Array2 = [38, 23, 85];
const Array3 = [29, 81, 15, 36, 88, 22];


const mergedArray = Array1.concat(Array2, Array3);


const largestElement = Math.max(...mergedArray);

console.log("Merged Array:", mergedArray);
console.log("Largest Element:", largestElement);
