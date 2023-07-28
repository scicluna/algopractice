/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

//Plan: start with lowest head and append next lowest head to .next and so on
function mergeTwoLists(list1, list2) {
    if (!list1 && list2) {
        return list2
    }
    if (list1 && !list2) {
        return list1
    }

    let main = {}
    //use list with lowest value as main list
    if (list1?.val <= list2?.val) {
        main = list1
        list1 = list1?.next
    } else {
        main = list2
        list2 = list2?.next
    }
    //now walk em in
    function walk(head) {
        if (!head) return
        if (list1 && list2) {
            if (list1.val <= list2.val) {
                head.next = list1
                list1 = list1?.next
            } else {
                head.next = list2
                list2 = list2?.next
            }
        } else if (list1) {
            head.next = list1
            list1 = list1?.next
        } else if (list2) {
            head.next = list2
            list2 = list2?.next
        }
        walk(head.next)
    }
    walk(main)
    return main
}