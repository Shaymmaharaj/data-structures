class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}
  	this.end = 0
  }
	push(value) {
    this.storage[this.end] = value 
    this.end++
     }


 pop() {
   if(this.end > 0){
   	this.end--
   	var value = this.storage[this.end]
   	return value
   }

 }

  size() {
    return this.end
  }

}