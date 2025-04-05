var arr = ['A', 'B', 'C']
var temp = {}

for (var i = 0; i < arr.length; i++) {
  temp[i + ''] = arr[i]
}

console.log(temp)
