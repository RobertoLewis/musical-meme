function Node (value) {

    var node = {};
    node.value = value;
  console.log("adding value", node.value);
    node.next = null;

    return node;
  }

var LinkedList = function (initialValue) {

  var newNode = Node(initialValue);

  this.head = newNode;
  console.log("adding head", this.head.value);
  this.tail = this.head;

};


LinkedList.prototype.addToTail = function(value) {
  if(!this.head.value){
    this.head.value = value;
    return;
  }
  var newNode = Node(value);
  if(this.tail.value === undefined){this.tail = newNode;}
  this.tail.next = newNode;
  this.tail = newNode;


};

LinkedList.prototype.removeHead = function(){
  if(this.head === this.tail){
    this.head.next = null;
    this.tail = null;
  }
  var newHead = this.head.next;
  this.head.next = null;
  this.head = newHead;

};

LinkedList.prototype.contains = function(value){
  var result = false;

  var nodeRecurse = function(node){
    if(node.value === value){
      result = true;
      return;
    }
    if(node.next === null){
      return;
    } else {
      nodeRecurse(node.next);
    }

  };

  nodeRecurse(this.head);

  return result;
};
