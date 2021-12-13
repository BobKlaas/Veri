class Tree{
    constructor(root){
        this.root = root;
    }

    maxlevel = 0;
    deepestNodes = [];

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
        this.traverseTree(this.root, 0);
        return this.deepestNodes;
    }

    //Traverse tree to find the deepest nodes
    traverseTree(root,level){

        //[IF] Add root as deepest node
        if(this.deepestNodes.length === 0) {
            const n = {node: root, level: level};            
            this.deepestNodes.push(n);
        }    

        //[IF] Level exceeds maxlevel recorded in traverse, this is a new max so clear array and add node
        if(level > this.maxlevel){
            this.maxlevel = level;
            this.deepestNodes=[];
            this.deepestNodes.push({node:root,level:level});
        }else if(level == this.maxlevel){
            this.deepestNodes.push({node:root,level:level});
        }else{
            //Do Nothing
        }

        //Has left child, no right child (continue traverse left, +1 to level)
        if(root.left && !root.right) {
            this.traverseTree(root.left,++level);
        }
        
        //Has right child, no left child (continue traverse right, +1 to level)
        if(root.right && !root.left) {
            this.traverseTree(root.right,++level);
        }

        //Has both left and right child, increment level (continue traverse left/right, +1 to level)
        if(root.left && root.right){
            this.traverseTree(root.left,++level);
            this.traverseTree(root.right,level);
        }           
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