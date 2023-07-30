/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {void} Do not return anything, modify head in-place instead.
//  */

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

//while head
//temp = curr.next
//curr.next = last
//last.next = curr.next
//curr = temp
//how do i get to last? And then walk last back?
//last =...
//if !head.next return last

//[1,2,3,4,5]
// 1 -> 5 -> 2
// 2 -> 4 -> 3
function reorderList(head) {
    let arr = []
    let node = head
    while (node) {
        arr.push(node)
        node = node.next
    }

    let i = 0, j = arr.length - 1;
    while (i < j) {
        arr[i].next = arr[j];
        i++;

        if (i == j) {
            break;
        }

        arr[j].next = arr[i];
        j--;
    }
    arr[i].next = null;
    return head
}
