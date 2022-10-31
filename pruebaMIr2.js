// A string of brackets is correctly matched if you can pair every opening bracket up with a later closing bracket, and vice versa. For example, (()()) is correctly matched, and (() and )( are not.

//     Implement a function which takes a string of brackets and returns the minimum number of brackets you'd have to add to the string to make it correctly matched.
    
//     For example, (() could be correctly matched by adding a single closing bracket at the end, so you'd return 1. )( can be correctly matched by adding an opening bracket at the start and a closing bracket at the end, so you'd return 2.
    
//     If your string is already correctly matched, you can just return 0



// There are a number of tiles on the floor, each numbered with a different non-negative integer. Treat this set of tiles as an array. You are initially standing on the first tile. Each tile in the set represents your maximum jumping distance at that position. (For example, if you are standing on 3, you can jump up to 3 tiles forward). Find out if you can reach the last tile.

// function can_reach_end(nums) {
//     for (let i=0; i < nums.length; i++){
//       let move = nums[i];
//       if (move+i >= nums.length-1) return true
//       if (move > 0) continue
//       else return false
//     }
//   }


// retornar la suma del numero que falta[6,3,2,4,3,1], falta 5 y esta repetido 3, returnar la suma de los dos (5+3=)

function find_mistake(nums) {
    let sortedArray = nums.sort(function(a, b) {
      return a - b;
    });
    for (let i =0;  i<nums.length; i++){
      if (sortedArray[i] !== i+1) return sortedArray[i] + i +2
    }
  }

  console.log (find_mistake ([6,1,5,4,3,1]))