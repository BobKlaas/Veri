class Tree{
    constructor(root){
        this.root = root;
    }

    //Converts a value to a node "type" and adds it to the tree
    addValue(val){
        var n = new Node(val);
        if(this.root == null){
            this.root = n;
        }else{
            this.root.addNode(n);
        }
    }

    //Traverse through the tree
    traverse(order){       
        switch(order) {
            case 'pre-order':
                this.root.preOrderTraverse(order);
                //console.log('PRE');
                break;
            case 'post-order':
                this.root.postOrderTraverse(order);
                //console.log('POST');
                break;
            default:
                this.root.inOrderTraverse(order);
                //console.log('IN');
        }
    }

    //Search tree for NODE by value
    search(val){
       var nodeExists = this.root.search(val);
       return nodeExists;      
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

    find(root,level){
        if(this.root != null){
            find(this.root.left, ++level);  
            // Update level and rescue
            if (level > maxLevel){
                res = this.root.value;
                maxLevel = level;
            }
            find(this.root.right, level);
        }
    }
}