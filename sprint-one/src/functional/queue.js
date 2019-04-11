var Queue = function() {
  var someInstance = {};
  var num = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[num] = value
    num ++
    
  };

  someInstance.dequeue = function() {
  var key  = Object.keys(storage)
      
  
    delete storage[key.length -1]
    storage
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
