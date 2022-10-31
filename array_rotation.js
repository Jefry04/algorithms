// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

// a = array, d = rotations

function rotLeft(a, d) {
    const rightHand = a.slice(d)
    if (rightHand) {
        const leftHand = a.slice(0,d)
        return rightHand.concat(leftHand)
    } else {
        return a
    }
}
console.log(rotLeft([1,2,3,4,5],2))

