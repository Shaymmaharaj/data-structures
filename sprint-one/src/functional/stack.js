var Stack = function() {
  var someInstance = {};
  var num = 0
  // Use an object with numeric keys to store values
  var storage = {};
  


  // Implement the methods below
  someInstance.push = function(value) {
    // 
    num++
    storage[num] = value 
  
};

  someInstance.pop = function() {
  
    

  };

  someInstance.size = function() {
    return Object.keys(storage).length
    
  };
  console.log(someInstance)
  return someInstance;
};
