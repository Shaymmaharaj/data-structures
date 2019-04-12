var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // just like enqueue
    // add element to end of object

  };

  list.removeHead = function() {
    //similar to stack.pop
    // delete the very first element from the object
    // return the object after its deleted
  };

  list.contains = function(target) {
    // wants to iterate through the object
    // if current value is equal to target then return
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
