//var pluralOrNot = 'bottles'



// let bottles = 99;

// for (bottles; bottles > 0; bottles--) {
//   // most likely case for numbers 3-99
//   if (bottles > 2) {
//     console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`)
//   }
//   // case when one less bottle is no longer plural ie 2
//   else if (bottles > 1) {
//     console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottle of beer on the wall.\n`)
//   }
//   // case with 1 bottle
//   else if (bottles > 0) {
//     console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.\n`)
//   }
//   // 0 bottles
//   else {
//     console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall\n`)
//   }
// };


//--------------------------------------------------------------


function pickNumber() {
  let value = prompt("Please enter a number", 99)
  // document.getElementById("bottles").innerHTML =
  if (Number(value) != null) {
    for (let bottles = Number(value); bottles >= 0; bottles--) {
      // >2
      if (bottles > 2) {
        document.getElementById("bottles").append(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`)
      }
      // case with 2
      else if (bottles === 2) {
        document.getElementById("bottles").append(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottle of beer on the wall.\n`)
      }
      // case with 1
      else if (bottles === 1) {
        document.getElementById("bottles").append(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.\n`)
      }
      // 0 bottles
      else {
        document.getElementById("bottles").append(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.\n`)
      }
    }
  }
}