function compareArrays(arr1, arr2) {
    let result;

    if (arr1.every((element, index) => { element === arr2[index] })) {

        result = true;
    } else {
        result = false;
    }

    return result;
}



function advancedFilter(arr) {
    let resultArr;

    arr = arr.filter((element) => { return (element > 0 && element % 3 === 0); });

    resultArr = arr.map((element) => { return element * 10; });

    return resultArr;
}