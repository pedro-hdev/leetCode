/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    const n = x.toString().split("").reverse().join("")


    if (x == n) {
        return true
    } else {
        return false
    }




};