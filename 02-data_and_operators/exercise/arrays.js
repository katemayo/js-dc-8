const arr = [1, 2, 3, 4, 5]

// let mappedArr = arr.map(function (item) {
//   console.log(item)
//   return item * 2
// })

// mappedArr
// arr

const mappedArr = []

for (let i = 0; i < arr.length; i++) {
  mappedArr.push(arr[i] * 2)
}

mappedArr
