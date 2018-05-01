function makeCountingFunction (predicate) {
  return function (numbers) {
    var count = 0
    numbers.forEach(function (number) {
      if (predicate(number)) {
        count++
      }
    })
    return count
  }
}

function isOdd (number) {
  return (number % 2) === 1
}

var countTheOdds = makeCountingFunction(isOdd)

console.log(countTheOdds([1, 2, 3, 4, 5, 6, 7]))
