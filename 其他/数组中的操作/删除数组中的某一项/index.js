var arr = [{
  name: 1,
  value:2
}, {
  name:2,
  value: 3
}, {
  name:3,
  value: 4
}]

for(const [i, v] of arr.entries()) {
  if (v.name === 2) {
    arr.splice(i, 1)
    break
  }
}


//
var arr = [1, 3, 5, 7, 9]
for (const i of arr) {
  if (i === 3) {
    const index = arr.indexOf(i)
    arr.splice(i, 1)
    break
  }
}

//
filter过滤