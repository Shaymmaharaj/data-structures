var Queue = function() {
  var someInstance = {};
  var num = 0;
  var slicedKey = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var len = Object.keys(storage).length 
  // Implement the methods below
  //var len = Object.keys(storage).length 
  someInstance.enqueue = function(value) {
    
    storage[len] = value
    len++
    
  };

  someInstance.dequeue = function() {
  var key  = Object.keys(storage)
     var value = storage[slicedKey]
    delete storage[slicedKey]
    slicedKey++
    return value
 

  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
