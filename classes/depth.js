class Depth{
    constructor(node,level){
        this.node = node;
        this.level = level;
    }

    incrementDepth(n,l){
        this.node = n;
        this.level = l++;
    }

}