//Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//Okay, we have head.val and head.next. so to reverse this... we need to
//traverse to the end. then we say next = val-1 til val-1 is null

function reverseList(head) {
    const values = []

    function populatenext(head, i) {
        if (i < 0) return
        head.next = { val: values[i], next: null }
        populatenext(head.next, i - 1)
    }

    while (head?.next) {
        values.push(head.val)
        head = head.next
    }

    populatenext(head, values.length - 1)

    return head
}

function betterreverse(head) {
    let prev = null
    let curr = head
    while (curr != null) {
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
}