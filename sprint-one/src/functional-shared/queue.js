var Queue = function() {

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	 
	var r = {
		storage : {},
		 start :0,
		 end: 0,
		



	};
 _.extend(r, methods)

 	 return r
};

 var methods = {
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

	






