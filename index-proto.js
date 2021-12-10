
var tree;

function Tree(){
    this.root = null;
}

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

//Recursive function to recurse through tree and add the node to correct position
Node.prototype.addNode = function(n){
    if(n.value < this.value){
        if(this.left == null){
            this.left = n;
        }else{
            this.left.addNode(n);
        }            
    }else if (n.value > this.value){
        if(this.right == null){
            this.right = n;
        }else{
            this.right.addNode(n);
        }            
    }
}

//Converts a value to a node "type" and adds it to the tree
Tree.prototype.addValue = function(val){
    var n = new Node(val);
    if(this.root == null){
        this.root = n;
    }else{
        this.root.addNode(n);
    }
}




init();


function init(){
    //Creat Tree and Add Values to Tree
    tree = new Tree();
    tree.addValue(5);
    tree.addValue(3);
    tree.addValue(7);

    console.log(tree,"TREE");     
}


