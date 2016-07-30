deepEquals = function(aObj, bObj){
  //should be same type of Object
  if(Array.isArray(aObj) !== Array.isArray(bObj)){
    return false;
  }
  //number of keys should be the same
  if(Object.keys(aObj).length !== Object.keys(bObj).length){
    return false;
  }
  //iterate over aObj

  for (var key in aObj){
    if(!bObj.hasOwnProperty(key)){
      return false;
    }
    if(typeof aObj[key] === 'object'){
      return deepEquals(aObj[key], bObj[key]);
    }
    if (aObj[key] !== bObj[key]){
      return false;
    }
  }

  return true;
};
