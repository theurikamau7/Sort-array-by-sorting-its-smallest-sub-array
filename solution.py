def find_index_of_subarray(arr):
    n = len(arr)
    
    if n <= 1:
        return [0, 0]

    # Find the left boundary of subarray
    left = 0
    while left < n - 1 and arr[left] <= arr[left + 1]:
        left += 1

    # If the array is already sorted
    if left == n - 1:
        return [0, 0]

    # Find the right boundary of subarray
    right = n - 1
    while right > 0 and arr[right] >= arr[right - 1]:
        right -= 1

    # Find the minimum and maximum values
    min_val = min(arr[left:right + 1])
    max_val = max(arr[left:right + 1])

    # Extend the left boundary
    while left >= 0 and arr[left] > min_val:
        left -= 1

    # Extend the right boundary
    while right < n and arr[right] < max_val:
        right += 1

    return [left + 1, right - 1]

# Example
arr = [1, 2, 3, 7, 9, 8]
result = find_index_of_subarray(arr)
print(result)