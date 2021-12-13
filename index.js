
var tree;
var root

init();


function init(){
    //Initialize Tree Object
    tree = new Tree();

    //Populate tree with nodes
    let treeValues = [12,11,90,82,7,9];
    //treeValues = [30,20,40,15,25,35,50,5,18,45,60];
    //treeValues = [10,9,8,7,6,5,4,3,2,1];
    treeValues.forEach(item => tree.addValue(item));

    //Sort tree using Pre-Order Traversing and Display Values
    let aryTreePreOrder = tree.traverse('pre-order');
    if(aryTreePreOrder!==undefined) console.log('Tree Sorted using Pre-Order:',aryTreePreOrder);

    //Sort tree using Pre-Order Traversing and Display Values
    let aryTreeInOrder = tree.traverse('in-order');
    if(aryTreeInOrder!==undefined) console.log('Tree Sorted using In-Order:',aryTreeInOrder);

    //Sort tree using Pre-Order Traversing and Display Values
    let aryTreePostOrder = tree.traverse('post-order');
    if(aryTreePostOrder!==undefined) console.log('Tree Sorted using Post-Order:',aryTreePostOrder);

    //Search for Node by Value
    let searchNode = tree.search(treeValues[0]);
    if(searchNode!==undefined) console.log('Search:',searchNode);

    //Get Min Value in Tree
    let minNode = tree.getMin();
    if(minNode!==undefined) console.log('Minimum Node:',minNode);

    //Get Max Value in Tree
    let maxNode = tree.getMax();
    if(maxNode!==undefined) console.log('Maximum Node:',maxNode);

    //Get Deepest Node
    let deepNode = tree.getDeepest(tree);
    if(deepNode!==undefined) console.log('Deepest, ' + deepNode[0].node.value + '; Depth, ' + deepNode[0].level);
    
}