function highestProductOf3Ints(arrayOfInts){
  var highestProductOf3, highestProductOf2, highest, lowestProductOf2, lowest;


  highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts [2];
  console.log("highest: " + highest);
  console.log("lowest: " + lowest);

  for (i = 2; i < arrayOfInts.length; i++){
    var high2 = arrayOfInts[i] * highest, low2 = arrayOfInts[i] * lowest;
    var high3 = arrayOfInts[i] * highestProductOf2, low3 = arrayOfInts[i] * lowestProductOf2;
    if(high2 > highestProductOf2){
      highestProductOf2 = high2;
    }
    if (high2 < lowestProductOf2){
      lowestProductOf2 = high2;
    }
    if(low2 < lowestProductOf2){
      lowestProductOf2 = low2;
    }
    if (low2 > highestProductOf2){
      highestProductOf2 = low2;
    }

    if(high3 > highestProductOf3){
      highestProductOf3 = high3;
    }
    if(low3 > highestProductOf3){
      highestProductOf3 = low3;
    }

    if(arrayOfInts[i] > highest){
      highest = arrayOfInts[i];
    }
    if(arrayOfInts[i] < lowest){
      lowest = arrayOfInts[i];
    }

    console.log("Highest product of 2: " + highestProductOf2);
    console.log("Lowest product of 2: " + lowestProductOf2);
    console.log("Highest product of 3: " + highestProductOf3);
    console.log("Highest: " + highest);
    console.log("Lowest: " + lowest);

  }
  return highestProductOf3;

  };

var x = highestProductOf3Ints([ -10, -10 ,1,3,2]);
console.log(x);
