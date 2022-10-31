// BASICO.. SUMA DE ARRAY

function simpleArraySum(ar) {
    // Write your code here
    let acum =0;
      ar.map((element) => {
        acum = acum + element ;
    });
    return acum;
}

console.log (simpleArraySum([1,2,3,4,10,11]))