function compareArrays(arr1, arr2) {

    return (arr1.lenght === arr2.lenght && arr1.every((element, index) => { return element === arr2[index] }));
}


function advancedFilter(arr) {
    let resultArr;

    arr = arr.filter((element) => { return (element > 0 && element % 3 === 0); });

    resultArr = arr.map((element) => { return element * 10; });

    return resultArr;
}