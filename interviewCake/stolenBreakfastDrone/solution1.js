function deliveryIdChecker(IdArray){
  console.log("running");
  var deliveryIdDictionary = {};
  
  for (var i = 0; i < IdArray.length; i++){

    if(deliveryIdDictionary[IdArray[i]]){

      deliveryIdDictionary[IdArray[i]]++;
    }
    else{
      deliveryIdDictionary[IdArray[i]] = 1;
    }
  }

  for ( var prop in deliveryIdDictionary){

    console.log( "ID " +  prop + " = " + deliveryIdDictionary[prop] );
    if(deliveryIdDictionary[prop] === 1){
      return prop;
    }
  }
}

console.log(deliveryIdChecker(deliveryIdConfirmations));
