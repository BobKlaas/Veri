

init([]);

function init(treeValues){
    //Initialize Tree Object
    let tree = new Tree();
    
    //Populate tree with nodes
    treeValues = (treeValues.length==0)?[12,11,90,82,7,9]:treeValues;
    treeValues.forEach(item => tree.addValue(item));   

    //Sort tree using Pre-Order Traversing and Display Values
    let aryTreePreOrder = tree.traverse('pre-order');

    //Sort tree using Pre-Order Traversing and Display Values
    let aryTreeInOrder = tree.traverse('in-order');

    //Sort tree using Pre-Order Traversing and Display Values
    let aryTreePostOrder = tree.traverse('post-order');

    //Search for Node by Value
    let searchNode = tree.search(treeValues[0]);

    //Get Min Value in Tree
    let minNode = tree.getMin();

    //Get Max Value in Tree
    let maxNode = tree.getMax();

    //Show Deepest Nodes
    let deepestNodes = tree.getDeepest();    

    //Populate DOM
    populateDom(deepestNodes,aryTreePreOrder,aryTreeInOrder,aryTreePostOrder,treeValues,minNode,maxNode);    
}






