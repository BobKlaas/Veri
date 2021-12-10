
var tree;


init();


function init(){
    //Creat Tree and Add Values to Tree
    tree = new Tree();
    //treeValues = [12,11,90,82,7,9];
    treeValues = [30,20,40,15,25,35,50,5,18,45,60];
    treeSearch = 30;
    treeValues.forEach(item => tree.addValue(item));

    //Traverse Node Tree and display 
    tree.traverse('in-order');

    //Search for Node by Value
    var searchNode = tree.search(treeSearch);
    if(searchNode!==undefined) console.log('Search:',searchNode);

    //Get Min Node
    var minNode = tree.getMin();
    if(minNode!==undefined) console.log('Minimum Node:',minNode);

    //Get Max Node
    var maxNode = tree.getMax();
    if(maxNode!==undefined) console.log('Maximum Node:',maxNode);
}


