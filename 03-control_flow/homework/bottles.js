//var pluralOrNot = 'bottles'



function pickNumber() {
  let bottles = 99;
  var person = prompt("Please enter a number", "a numeral greater than one");
  document.getElementById("demo").innerHTML =
    if (bottles.isNaN()) {
      document.body.append('number please')
    } else {
      for (bottles; bottles > 0; bottles--) {
        // most likely case for numbers 3-99
        if (bottles > 2) {
          document.body.append(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.\n`)
        }
        // case when one less bottle is no longer plural ie 2
        else if (bottles > 1) {
          document.body.append(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles - 1} bottle of beer on the wall.\n`)
        }
        // case with 1 bottle
        else if (bottles > 0) {
          document.body.append(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.\n`)
        }
        // 0 bottles
        else {
          document.body.append(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall\n`)
        }
      }
    }
}