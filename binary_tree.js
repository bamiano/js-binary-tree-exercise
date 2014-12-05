function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function (value){
    if (this.value > value){
      if (this.left === null){
        this.left = new BinTree(value);
      }
      else {
        this.left.insert(value);
      }
    }
    else {
      if (this.right === null){
        this.right = new BinTree(value);
      }
      else{
        this.right.insert(value);
      }
    }
    return this;
};

BinTree.prototype.isLeaf = function () {
    if (this.left === null && this.right === null){
      return  true;
    }
    else {
      return false;
    }
};


BinTree.prototype.search = function (value){
  if (this.value === value){
    return true;
  }

  else if (this.value > value) {
    if (this.left === null) {
      return false;
    }
    else {
      return this.left.search(value);
      }
    }

  else if (this.value < value) {
    if (this.right === null) {
      return false;
      }
    else {
      return this.right.search(value);
      }
    }
};


try{
  module.exports = BinTree;
} catch(e){

}