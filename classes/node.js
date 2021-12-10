class Node{
    constructor(val,left,right){
        this.value = val;
        this.left = null;
        this.right = null;
    }

    //Recursive function to recurse through tree and add the node to correct position
    addNode(n){
        if(n.value < this.value){
            this.addLeft(n);
        }else if (n.value > this.value){
            this.addRight(n);
        }
    }

    //Adds a node to the right 
    addRight(n){
        if(this.right == null){
            this.right = n;
        }else{
            this.right.addNode(n);
        }            
    }
    
    //Adds a node to the left
    addLeft(n){
        if(this.left == null){
            this.left = n;
        }else{
            this.left.addNode(n);
        }         
    }

    // Traversal Order: https://iq.opengenus.org/binary-tree-traversals-inorder-preorder-postorder/ 
    // Input: [30,20,40,15,25,35,50,5,18,45,60]
    // Pre: {30 , 20 , 15 , 5 , 18 , 25 , 40 , 35 , 50 , 45 , 60} Tested
    // In Order: {5 , 15 , 18 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 60} Tested
    // Post: {5 , 18 , 15 , 25 , 20 , 35 , 45 , 60 , 50 , 40 , 30} Tested
   
    // Pre Order Tree Walk: The root node gets visited first, followed by left and right subtrees. (root, left, right)
    preOrderTraverse(){
        console.log(this.value);
        if(this.left != null){
            this.left.preOrderTraverse();
        }        
        if(this.right != null){
            this.right.preOrderTraverse();
        }  
    }
    
    // In-Order tree walk: Nodes from the left subtree get visited first, followed by the root node and right subtree.
    inOrderTraverse(){
        if(this.left != null){
            this.left.inOrderTraverse();
        }
        console.log(this.value);
        if(this.right != null){
            this.right.inOrderTraverse();
        }  
    }

    // Postorder tree walk: Nodes from the left subtree get visited first, followed by the right subtree, and finally the root.
    postOrderTraverse(){
        if(this.left != null){
            this.left.postOrderTraverse();
        }
        
        if(this.right != null){
            this.right.postOrderTraverse();
        }  
        console.log(this.value);
    }    

    //Search Binary Tree for value and return node if found
    search(val){
        if(this.value == val){
            return this;
        }else if(val < this.value && this.left != null){
            return this.left.search(val);            
        }else if(val > this.value && this.right != null){
            return this.right.search(val);
        }
    }

    //Get Node with Lowest Value
    getMinNode(){
        if(this.left != null){
            return this.left.getMinNode();
        }else{            
            return this;
        }
    }

    //Get Node with Highest Value
    getMaxNode(){
        if(this.right != null){
            return this.right.getMaxNode();
        }else{            
            return this;
        }
    }
}