
//Populate DOM with Stats
function populateDom(deepestNodes,aryTreePreOrder,aryTreeInOrder,aryTreePostOrder,treeValues,minNode,maxNode){
    setDeepestNodes(deepestNodes);
    setPreOrder(aryTreePreOrder);
    setInOrder(aryTreeInOrder);
    setPostOrder(aryTreePostOrder);
    setTreeArray(treeValues);
    setMinValue(minNode);
    setMaxValue(maxNode);
}

//Tree Input
function setTreeArray(tree){
    $("#tree-array-input").val(tree.join());
}

//Deepest Nodes
function setDeepestNodes(nodes){
    $("#deep-node-list").empty();
    nodes.forEach(item => {
        var html = `<li class="list-group-item">Deepest, ${item.node.value}; Depth, ${item.level}</li>`
        $("#deep-node-list").append(html);
    }); 
}

//Pre-Order Sort
function setPreOrder(ary){
    $("#pre-order").val(ary.join());
}

//In-Order Sort
function setInOrder(ary){
    $("#in-order").val(ary.join());
}

//Post-Order Sort
function setPostOrder(ary){
    $("#post-order").val(ary.join());
}

//Min-Value in Tree
function setMinValue(minNode){
    $("#min-value").val(minNode.value);
}

//Max-Value in Tree
function setMaxValue(maxNode){
    $("#max-value").val(maxNode.value);
}

//Returns Tree Input Values
function getTreeInput(){
    return $("#tree-array-input").val();
}

//Button Click Event for Submit
$("#btnGetFacts").click(function(){
    let inputArray = getTreeInput().split(',');
    
    inputArray = inputArray.map(item => parseInt(item));
    init(inputArray);
});