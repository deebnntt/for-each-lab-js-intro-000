function iterativeLog(array) {
  array.forEach(el => console.log(`${array.indexOf(el)}: ${el}`))
}

function iterate(callback) {
  var array = ["cat","dog","mouse"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
