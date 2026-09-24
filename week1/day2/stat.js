const nums = [12, 5, 88, 3, 45, 88, -7];


function Findmax(arr) {
    let max = arr[0];

    for (let n of arr) {
        if (n > max) {
            max = n
        }
    }

    return max
}

function FindMin(arr) {
    let min = arr[0]
    for (let n of arr) {
        if (n < min) {
            min = n
        }
    }
    return min
}

function Average(arr) {
    let total = 0
    let avg = 0
    for (let n of arr) {
        total += n
    }
    let len = arr.length
    avg = total
    return total / len
}
console.log(Findmax(nums))
console.log(FindMin(nums))
console.log(Average(nums))