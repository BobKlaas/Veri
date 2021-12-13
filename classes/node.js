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
   
    // Use Pre-Order to traverse the tree and return array of sorted tree values
    preOrderTraverse(ary){        
        ary.push(this.value);
        if(this.left != null){
            this.left.preOrderTraverse(ary);
        }        
        if(this.right != null){
            this.right.preOrderTraverse(ary);
        }  
        return ary;
    }
    
    // Use In-Order to traverse the tree and return array of sorted tree values
    inOrderTraverse(ary){
        if(this.left != null){
            this.left.inOrderTraverse(ary);
        }
        ary.push(this.value);
        if(this.right != null){
            this.right.inOrderTraverse(ary);
        }  
        return ary;
    }

    // Use post-order to traverse the tree and return array of sorted tree values
    postOrderTraverse(ary){
        if(this.left != null){
            this.left.postOrderTraverse(ary);
        }
        if(this.right != null){
            this.right.postOrderTraverse(ary);
        }  
        ary.push(this.value);        
        return ary;
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
    
    //Get Deepest Nodes in Tree
    getDeepestNode(deepestNodes,level){

        //[IF] Results is empty, add root node to results
        if(deepestNodes.length === 0) {
            const n = {node: this, level: level};            
            deepestNodes.push(n);
        }    

        //[IF] Current level is greater than level, keep exists [ELSE] Add new node into deepestNodes
        if(this != null){
            let currentDeepest = deepestNodes.pop();
            if(currentDeepest.level > level){            
                deepestNodes.push(currentDeepest);
            }else{
                deepestNodes.push({node:this,level:level});
            }
        }

        //Has left child, no right child (continue traverse left)
        if(this.left && !this.right) {
            this.maxlevel++;
            this.left.getDeepestNode(deepestNodes,++level);
        }
        
        //Has right child, no left child (continue traverse right)
        if(this.right && !this.left) {
            this.maxlevel++;
            this.right.getDeepestNode(deepestNodes,++level);
        }

        //Has both left and right child, increment level (continue traverse left/right)
        if(this.left && this.right) {
            this.maxlevel++;
            this.left.getDeepestNode(deepestNodes,++level);
            this.right.getDeepestNode(deepestNodes,level);
        }

        

        return deepestNodes;    
    }
}