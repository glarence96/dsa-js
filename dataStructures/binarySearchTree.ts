class TreeNode {
    data: number;
    left: TreeNode;
    right: TreeNode;
    constructor(val: number) {
        this.data = val
    }
}

class BST {
    root: TreeNode;
    add(val: number) {
        console.log(val)
        if (!this.root) {
            this.root = new TreeNode(val)
            return;
        }
        const searchTree = (tn: TreeNode) => {
            if (val > tn.data) {
                if (!tn.right) {
                    tn.right = new TreeNode(val)
                } else {
                    return searchTree(tn.right)
                }
            }
            if (val < tn.data) {
                if (!tn.left) {
                    tn.left = new TreeNode(val)
                } else {
                    return searchTree(tn.left)
                }
            }
            return;
        }
        return searchTree(this.root)
    }

    findMin() {
        if (!this.root) {
            return undefined
        }
        let currNode = this.root
        while (currNode.left) {
            currNode = currNode.left
        }
        return currNode.data
    }

    findMax() {
        if (!this.root) {
            return undefined
        }
        let currNode = this.root
        while (currNode.right) {
            currNode = currNode.right
        }
        return currNode.data
    }

    isPresent(val: number) {
        let currNode = this.root
        if (!currNode) return false
        let present = false
        while(currNode) {
            if (val === currNode.data) {
                console.log(val, currNode.data)
                present = true
                break;
            }
            if (val > currNode.data) {
                currNode = currNode.right
                continue;
            }
            currNode = currNode.left
        }
        return present
    }

    remove(val: number) {
        let currNode = this.root
        if (!currNode) return;
        while (currNode.data !== val) {
            if (val > currNode.data) {
                currNode = currNode.right
            } else {
                currNode = currNode.left
            }
        }
        if (!currNode.left && !currNode.right) {
            currNode = undefined
            return;
        }
        if (currNode.right) {
            const rightNode = currNode.right
            currNode = rightNode // 36
            return this.remove(rightNode.data)
        }
        if (currNode.left) {
            const ln = currNode.left
            currNode = ln
            return this.remove(ln.data)
        }

    }
}

const bst = new BST();
bst.add(54);
bst.add(74);
bst.add(27);
bst.add(56);
bst.add(21);
bst.add(36);
bst.add(12);
bst.add(14);
bst.add(19);
bst.add(23);
bst.add(28);

console.log(bst)

console.log(bst.findMin(), 12);
console.log(bst.findMax(), 74);
console.log(bst.isPresent(12), true);
console.log(bst.isPresent(14), true);
console.log(bst.isPresent(19), true);
console.log(bst.isPresent(98), false);
console.log(bst.remove(12));
console.log(bst.isPresent(12), false);
