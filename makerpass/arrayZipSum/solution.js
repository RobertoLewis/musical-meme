function zipSum (xs, ys) {
  var longArray = (xs.length > ys.length) ? xs : ys;
  var shortArray = (xs.length > ys.length) ? ys : xs;
  var results = [];

  for (var i = 0; i < shortArray.length; i++){
      results.push(longArray[i] + shortArray[i]);
  }

  return results;
}
