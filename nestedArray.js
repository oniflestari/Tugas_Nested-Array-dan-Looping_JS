function panggilNestedArray(value) {
  // tulis jawabanmu disini
  var arrNested = [];
  for (var i = 0; i < value[0].length; i++) {
    var arr = [value[0][i], value[1][i], value[2][i]];
    arrNested.push(arr);
  }
  console.log(arrNested);
}

var nestedArray = [
  [1, 2, 3, 4],
  ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
  ['Facebook', 'Tesla', 'Microsoft', 'Apple']
];

panggilNestedArray(nestedArray);