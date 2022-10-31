// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

const input=[
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
  ];

function hourglassSum(arr) {
    let mayor = null; 
    // Recorro filas con i, hasta el indice 3 
    for (let i = 0; i <= 3; i++) {
        // Recorro columnas con j, hasta el indice 3
        for (let j=0; j <= 3; j++) {
            const top = arr[i][j] + arr[i][j+1] + arr[i][j+2]
            const middle = arr[i+1][j+1]
            const bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            const hourGlass = top+middle+bottom;

            if (mayor === null){
                mayor = hourGlass
            } else if (hourGlass > mayor ) {
                mayor = hourGlass
            }
        }
    }

    return mayor;
} 

console.log(hourglassSum(input))