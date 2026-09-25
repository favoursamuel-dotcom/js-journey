const nums = [12, 5, 88, 3, 45, 88, -7];


function Findmax(arr) {
    if (arr.length == 0) {
        console.log("Invalid Array length")
    }
    let max = arr[0];

    for (let n of arr) {
        if (n > max) {
            max = n
        }
    }

    return max
}

function FindMin(arr) {
    if (arr.length == 0) {
        console.log("Invalid Array length")
    }
    let min = arr[0]
    for (let n of arr) {
        if (n < min) {
            min = n
        }
    }
    return min
}

function Average(arr) {
    if (arr.length == 0) {
        console.log("Invalid Array length")
    }
    let total = 0
    let avg = 0
    for (let n of arr) {
        total += n
    }
    let len = arr.length
    avg = total
    return total / len
}
console.log(`The maximum number is ${Findmax(nums)}`)
console.log(`The minimum number is ${FindMin(nums)}`)
console.log(`The Average of the array is ${Average(nums).toFixed(2)}`)