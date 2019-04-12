var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var newObj  = Object.create(stackMethods)
	newObj.storage = {};
	newObj.end = 0
	return newObj
};


var stackMethods = {
 	push : function(value) {
    this.storage[this.end] = value 
    this.end++
     },


  pop : function() {
   if(this.end > 0){
   	this.end--
   	var value = this.storage[this.end]
   	return value
   }

   },

  size : function() {
    return this.end
  }
}


