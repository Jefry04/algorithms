function deepFlatArray(arr) {
    let flatten = [];
    
    function iterate(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])){
                iterate(arr[i])
            } else {
                flatten.push(arr[i]);
            }
        }
    }
    iterate(arr)
    return flatten;
}

let arr = [ 1, 2, [3, 7, [8, 4], [1,9]]];
console.log(deepFlatArray(arr))

// METODO de array:
console.log(arr.flat(Infinity))