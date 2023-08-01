//invert a binary tree

function invertTree(root) {
    reverse(root)
    return root
}

function reverse(root) {
    if (root?.left && root?.right) {
        temp = root.left
        root.left = root?.right
        root.right = temp
    } else if (root?.left) {
        root.right = root.left
        root.left = null
    } else if (root?.right) {
        root.left = root.right
        root.right = null
    }
    else {
        return
    }
    reverse(root.left)
    reverse(root.right)
}