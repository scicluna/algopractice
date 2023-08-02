// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]

//determine index to scoop (by length-n)
//walk along it
//when we get to i = length-n-1 we set head.next to head.next.next
//when we get to i = length-n we set head.next to null
function removeNthFromEnd(head, n) {
    let arr = []
    let test = head
    while (test) {
        arr.push(test)
        test = test.next
    }

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - n - 1) {
            arr[i].next = arr[i + 1]?.next
            arr[i + 1].next = null
        }
        if (i == arr.length - n) {
            if (n == arr.length) {
                if (n == 1) {
                    return null
                }
                head = head.next
            } else {
                arr[i].val = null
                arr[i].next = null
            }
        }
    }


    return head
}