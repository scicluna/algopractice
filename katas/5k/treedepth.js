/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


//basically, we traverse the tree. every depth should get a +1

var maxDepth = function (root) {
    let maxDepth = 0
    function walk(root, count) {
        if (!root) {
            maxDepth = Math.max(maxDepth, count)
            return
        }
        count++
        walk(root?.left, count)
        walk(root?.right, count)
    }
    walk(root, 0)
    return maxDepth
};