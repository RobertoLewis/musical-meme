var asyncMap = function(tasks, callback){

  var promises = [];
  for (var i = 0; i < tasks.length;i++){
    var promise = new Promise (function (resolve, reject){
     tasks[i](resolve);
    });
    promises.push(promise);
  }
  Promise.all(promises).then(callback);

};  
