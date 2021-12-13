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
     getDeepestNodes(){
        var level = 0;
        var maxlevel = 0;
        var deepestNodes = [];

        // Closure function to traverse tree while maintaining awareness of maxlevel & deepestNodes
        function traverseTree(root,level){          

            //[IF] Add root as deepest node
            if(deepestNodes.length === 0) {
                const n = {node: root, level: level};            
                deepestNodes.push(n);
            }    

            //[IF] Level exceeds maxlevel recorded in traverse, this is a new max so clear array and add node
            if(level > maxlevel){
                maxlevel = level;
                deepestNodes=[];
                deepestNodes.push({node:root,level:level});
            }else if(level == maxlevel){
                deepestNodes.push({node:root,level:level});
            }else{
                //Do Nothing
            }

            //Has left child, no right child (continue traverse left)
            if(root.left && !root.right) {
                traverseTree(root.left,++level);
            }
            
            //Has right child, no left child (continue traverse right)
            if(root.right && !root.left) {
                traverseTree(root.right,++level);
            }

            //Has both left and right child, increment level (continue traverse left/right)
            if(root.left && root.right){
                traverseTree(root.left,++level);
                traverseTree(root.right,level);
            }             
        }

        //Call Closure to determine deepest nodes
        traverseTree(this,level);
        
        return {deepestNodes,level:maxlevel};
    }
}