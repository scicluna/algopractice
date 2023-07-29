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
    main = head
    function walk(head, n) {
        //break recursion
        if (!head) return
        //temp variable
        curr = head?.next
        //find last head - n
        last = lasthead(head, n)
        //set our end functions next to the last
        last.next = curr
        main.next = last
        //rerun it with main.next
        walk(main.next, n + 1)
    }
    function lasthead(head, n) {
        let test = head
        let length = 0
        while (test) {
            test = test.next
            length += 1
        }
        let result = head
        while (result?.next && length - n > 0) {
            result = result.next
        }
        return result
    }
    walk(main, 0)
    return main
}