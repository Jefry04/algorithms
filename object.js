// Case: Code snippet in react to make a service call and get only users > 10000 sal and wrap it to another object.
// api: 'abc.com/api/emps'
//expected object:
// [{
// id:'101',
// Name: 'Harry Larry',
// Details: {address: '101 address', phone: 1234567890, Sal: 20000}
// }]

//given object;
let apiArray = [
  {
    id: "101",
    FName: "Jefry",
    LName: "Larry",
    Address: "101 Address",
    Phone: 1234567890,
    Sal: 20000,
  },
  {
    id: "101",
    FName: "Harry",
    LName: "Larry",
    Address: "101 Address",
    Phone: 1234567890,
    Sal: 5000,
  },
];
//iteractua por cada uno de los elementos
// let newObject = apiArray.forEach((user) => {
//   let newArray = [];
//   if (user.Sal >= 1000) {
//     newArray = {
//       id: user.id,
//       name: user.FName,
//       details: {
//         Address: user.Address,
//         Phone: user.Phone,
//         sal: user.Sal,
//       },
//     };
//   }

//   console.log( newArray);
// });

/// .map devuelve un nuevo arreglo

let newObject = apiArray.map((user) => {
    let newArray = [];
    if (user.Sal >= 1000) {
      newArray = {
        id: user.id,
        name: user.FName + " "+ user.LName,
        details: {
          Address: user.Address,
          Phone: user.Phone,
          sal: user.Sal,
        },
      };
    }
      return newArray;
  });
console.log(newObject)

