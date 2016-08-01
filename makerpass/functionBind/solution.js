var bind = function(func, context){
  var args = [];
  for (i = 2; i < arguments.length;i++){
    args.push(arguments[i]);
  }
  return function(){
    var newArgs = args.slice();
    for (i = 0; i < arguments.length;i++){
    newArgs.push(arguments[i]);
  }
    return func.apply(context, newArgs);

  };
};

Function.prototype.bind = function(context) {
  var args = [], target = this;
  for (i = 1; i < arguments.length;i++){
    args.push(arguments[i]);
  }
  return function(){
    var newArgs = args.slice();
    for (i = 0; i < arguments.length;i++){
    newArgs.push(arguments[i]);
    }
     return target.apply(context, newArgs);
  };
};
