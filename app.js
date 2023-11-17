function findIndexOfSubArray (arr) {
    const n = arr.length;

    if (n <= 1) {
        return [0, 0];
    }

    // Find the left boundary of subarray
    let left = 0;
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left += 1;
    }

    // If the array is already sorted
    if (left === n - 1) {
        return [0, 0];
    }

    // Find the right boundary of subarray
    let right = n - 1;
    while (right > 0 && arr[right] >= arr[right - 1]) {
        right -= 1;
    }

    // Find the minimum and maximum values within unsorted subarray
    const minVal = Math.min(...arr.slice(left, right + 1));
    const maxVal = Math.max(...arr.slice(left, right + 1));

    // Extend left boundary
    while (left >= 0 && arr[left] > minVal) {
        left -= 1;
    }

    // Extend right boundary
    while (right < n && arr[right] < maxVal) {
        right += 1;
    }

    return [left + 1, right - 1];
}

// Example
const arr = [1, 2, 3, 6, 4, 4];
const result = findIndexOfSubArray (arr);
console.log(result);