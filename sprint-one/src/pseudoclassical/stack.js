var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {}
  this.end = 0
};

 	Stack.prototype.push = function(value) {
    this.storage[this.end] = value 
    this.end++
     },


 Stack.prototype.pop = function() {
   if(this.end > 0){
   	this.end--
   	var value = this.storage[this.end]
   	return value
   }

 },

  Stack.prototype.size = function() {
    return this.end
  }



