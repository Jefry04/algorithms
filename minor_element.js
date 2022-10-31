function minor(arr) {
  let elemMinor = arr[0];

  arr.forEach((element) => {
    if (element < elemMinor) {
      elemMinor = element;
    }
  });
  return elemMinor;
}

const array = [1, 2, 3, 4];
console.log(minor(array));
