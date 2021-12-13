class Tree{
    constructor(root){
        this.root = root;
    }

    //Converts a value to a node "type" and adds it to the tree
    addValue(val){
        const n = new Node(parseInt(val));
        if(this.root == null){
            this.root = n;
        }else{
            this.root.addNode(n);
        }
    }

    //Traverse through the tree
    traverse(order){   
        let aryTreeValues = [];    
        switch(order) {
            case 'pre-order':
                aryTreeValues = this.root.preOrderTraverse([]);                
                break;
            case 'post-order':
                aryTreeValues = this.root.postOrderTraverse([]);
                break;
            default:
                aryTreeValues = this.root.inOrderTraverse([]);
        }
        return aryTreeValues;
    }

    //Search tree for NODE by value
    search(val){
       const n = this.root.search(val);
       return n;      
    }

    //Get Node with lowest value
    getMin(){
        const n = this.root.getMinNode();
        return n;
    }
    
    //Get Node with the highest value
    getMax(){
        const n = this.root.getMaxNode();
        return n;
    }

    //Get Deepest Nodes from Tree
    getDeepest(){        
        const r = this.root.getDeepestNodes();
        return r.deepestNodes;        
    }

    //Display Deepest Nodes in Console
    logDeepestNodes(aryDeepest){
        if(aryDeepest != null && aryDeepest.length){
            aryDeepest.forEach(item => console.log('Deepest, ' + item.node.value + '; Depth, ' + item.level));
        }else{
            console.log('Tree Depth: Tree is empty',);
        }    
    }
}