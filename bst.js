//Implementing Binary Search Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {

    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    //Scalffolding out all the methods

    size(){
        return this.count;
    }

    insert(value){
        this.count++;
        let newNode = new Node(value);

        const searchTree = node => {
            //if value < node.value, go left
            if (value < node.value){
                //if there exist no left child, append a new node
                if(!node.left){
                    node.left = newNode;
                }else{
                    searchTree(node.left);
                }
            }
            //if value > node.value, go right
            else if(value > node.value){
                //if there exist no right child, append a new node
                if(!node.right){
                    node.right = newNode;
                }else{
                    searchTree(node.right);
                }
            }
        }

        searchTree(this.root);
    }

    min(){
        let currentNode = this.root;
        //Traversing the left node until the the last leaf node
        while(currentNode.left){
            currentNode = currentNode.left;
        }
        return currentNode.value;
    };

    max(){
        let currentNode = this.root;
        //Traversing the right node until the the last leaf node
        while(currentNode.right){
            currentNode = currentNode.right;
        }

        return currentNode.value;
    };

    contains(value){
        let currentNode = this.root;

        while(currentNode){
            if(currentNode.value == value){
                return true;
            }
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }
        }

        return false;

    }

    //Searching Algorithms

    //Depth First Search
    //we'll use a stack

    //Pre-Order - nlr
    dfsPreOrder(){
        let result = [];

        const traverse = node => {

            result.push(node.value);

            //Follow the recursive policy at each node
            if(node.left){
                traverse(node.left);
            }

            //Follow the recursive policy at each node
            if(node.right){
                traverse(node.right);
            }

        };

        traverse(this.root);

        return result;

    }


    //In-Order - lnr
    dfsInOrder(){
        let result = [];

        const traverse = node => {

            //Follow the recursive policy at each node
            if(node.left){
                traverse(node.left);
            }

            result.push(node.value);

            if(node.right){
                traverse(node.right);
            }

        }

        traverse(this.root);

        return result;

    }


    //Post-Order - lrn
    dfsPostOrder(){

        let result = [];

        const traverse = node => {

            //Follow the recursive policy at each node
            if(node.left){
                traverse(node.left);
            }

            //Follow the recursive policy at each node
            if(node.right){
                traverse(node.right);
            }

            result.push(node.value);

        };

        traverse(this.root);

        return result;

    }


    //Breadth First Search - level by level (level order search)
    //we'll use a queue
    bfs(){

        let result = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length){

            let currentNode = queue.shift();
            result.push(currentNode.value);

            if(currentNode.left){
                queue.push(currentNode.left);
            }

            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }

        return result;
    }

}


const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();
bst.min();
bst.contains(2);