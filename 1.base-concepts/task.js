"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1);
        arr.push(x2);
    } else if (d == 0) {
        x1 = -b / (2 * a);
        arr.push(x1);
    }
    return arr; // array
}

// task 2

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let dateEnd = new Date(date);
    let startDate = new Date();
    let body = amount - contribution;



    if (typeof percent !== "number") {
        percent = +percent;
    }
    if (typeof contribution !== "number") {
        contribution = +contribution;
    }
    if (typeof amount !== "number") {
        amount = +amount;
    }

    return totalAmount;
}
calculateTotalMortgage(7, 10000, 1000000, '12.08.2021')