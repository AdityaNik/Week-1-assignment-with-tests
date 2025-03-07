/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, 1000);
    })
    return promise;
}

function waitTwoSecond() {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, 2000);
    })
    return promise;
}

function waitThreeSecond() {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, 3000);
    })
    return promise;
}

function calculateTime() {

}