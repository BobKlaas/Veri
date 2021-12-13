class Tree{
    constructor(root){
        this.root = root;
    }

    //Converts a value to a node "type" and adds it to the tree
    addValue(val){
        const n = new Node(val);
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

    //Get Deepest Node
    getDeepest(){        
        const r = this.root.getDeepestNode([],0,0);
        console.log('R',r);
        return r;        
    }

}