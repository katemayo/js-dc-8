(function count (end) {
  let count = 1

  while (count <= end) {
    (function (c) {
      setTimeout(function () {
        console.log(c)
      }, 1000)
    })(count)
    count++
  }
})(5)
