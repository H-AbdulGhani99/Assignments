// - **Scenario 1 - Modify Array with Methods:**
//     - Initialize an array with some initial elements.
//     - Demonstrate the usage of the following array methods:
//         - **`push`**: Add new elements to the end of the array.
//         - **`pop`**: Remove the last element from the array.
//         - **`shift`**: Remove the first element from the array.
//         - **`unshift`**: Add new elements to the beginning of the array.

let array: number[] = [10, 20, 30, 40, 50, 60, 70];
console.log(array.pop()); // returns the popped element of the array
console.log(array);

console.log(array.push(80)); // returns an index of the new value
console.log(array);

console.log(array.shift()); //returns the first element of the array which was removed
console.log(array);

console.log(array.unshift(11)); //returns the length of a new array
console.log(array);

// - **Scenario 2 - Subarray Creation:**
//     - Implement the use of **`splice`** and **`slice`** to create subarrays from the original array:
//         - **`splice`**: Create a subarray by removing elements from the original array.
//         - **`slice`**: Create a subarray without modifying the original array.

let newArray: number[] = array.slice(2); // returns a sub-array from the 2nd index to the end
console.log(newArray); // Without modifying the original array

console.log(array);
console.log(array.splice(2, 3, 55)); // An array containing the elements that were deleted.
// After 2 index delete 3 numbers and add 55 after that
console.log(array);
