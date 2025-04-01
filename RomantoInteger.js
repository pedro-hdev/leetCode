/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    var n = 0

    const romanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,

    }

    for (let i = s.length - 1; i >= 0; i--) {

        var r = romanos[s[i]]
        var r_1 = romanos[s[i - 1]]
        n += r
        if (r_1 < r) {
            n = n - (r_1 * 2)
        }


    }

    return n

};