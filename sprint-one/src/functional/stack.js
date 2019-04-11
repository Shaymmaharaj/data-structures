var Stack = function() {
  var someInstance = {};
  var num = 0
  // Use an object with numeric keys to store values
  var storage = {};
  


  // Implement the methods below
  someInstance.push = function(value) {
    // 
    
    storage[num] = value 
    num++
  
};

  someInstance.pop = function() {
  
    var key  = Object.keys(storage)
      
  
    delete storage[key.length -1]

  };

  someInstance.size = function() {
    return Object.keys(storage).length
    
  };
  console.log(someInstance)
  return someInstance;
};
