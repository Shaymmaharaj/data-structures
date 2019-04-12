var Queue = function() {

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	 var newR = Object.create(queueMethods)
	 newR.storage = {};
   newR.end = 0
   newR.start = 0; 
	


 	 return newR
};

 var queueMethods = {
 	enqueue : function(value) {
    
     this.storage[this.end] = value
      this.end++
     },


  dequeue : function() {
     var value = this.storage[this.start]
    delete this.storage[this.start]
    this.start++
    return value
 

   },

  size : function() {
    return Object.keys(this.storage).length
  }
}

	






