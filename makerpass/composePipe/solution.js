var compose = function(){
  var funcArray = [];
  for (var i = 0; i < arguments.length; i++){
    funcArray.push(arguments[i]);
  }
  return function (arg){
    var result = funcArray.reduceRight(function(current, next){
      return next(current);
    }, arg);
    return result;
  }
};

var pipe = function(){
    var funcArray = [];
  for (var i = 0; i < arguments.length; i++){
    funcArray.push(arguments[i]);
  }
  return function (arg){
    var result = funcArray.reduce(function(current, next){
      return next(current);
    }, arg);
    return result;

  };
};
