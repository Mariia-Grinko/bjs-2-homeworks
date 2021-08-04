// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = 100;
    max = -100;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];

        if (arr[i] < min) min = arr[i];

        sum = arr[i] + sum;
    }
    avg = (sum / arr.length).toFixed(2);

    return { min: min, max: max, avg: +avg };
}

// Задание 2
function worker(arr) {
    let sum;
    sum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function makeWork(arrOfArr, func) {
    let max = 0;

    for (let i = 0; i < arrOfArr.length; i++) {
        let sum = func(arrOfArr)[i];
        if (sum > max) max = sum;
    }
    return max;
}

// Задание 3
function worker2(arr) {
    let result = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];

        if (arr[i] < min) min = arr[i];

    }
    result = max - min;
    return result;
}