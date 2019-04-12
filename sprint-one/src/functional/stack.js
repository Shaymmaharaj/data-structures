 var Stack = function() {
  var someInstance = {};
  var num = 0
  // Use an object with numeric keys to store values
  var storage = {};
  


  // Implement the methods below
  someInstance.push = function(value) {
    // 
    var len = Object.keys(storage).length
    storage[len] = value 
    len++
  
};

  someInstance.pop = function() {
  
    var key  = Object.keys(storage).length - 1 
    var  value = storage[key]
    // if(key === 0 ){
    //   return 
    // }
    delete storage[key]
    
    return value

  };

  someInstance.size = function() {
    return Object.keys(storage).length
    
  };
  return someInstance;
};
