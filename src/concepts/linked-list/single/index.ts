/**
 * Definition for singly-linked list.
 */
export class ListNode<T> {
  val: T
  next: ListNode<T> | null
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val
    this.next = next
  }
}
export class SingleLinkedList<T> {
  head: ListNode<T>
  tail: ListNode<T>
  length: number

  constructor(data: T = null) {
    if (data) {
      // Upon instantiation, the head and tail are the same, which will be newly created with the data
      const headNode = new ListNode(data)
      this.head = headNode
      this.tail = headNode
      this.length = 1
    } else {
      // If there is no data, everything is null and 0
      this.head = null
      this.tail = null
      this.length = 0
    }
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  private addNodeToEnd(data: T) {
    const nodeToBeAdded = new ListNode(data)
    if (this.isEmpty()) {
      this.head = nodeToBeAdded
    } else {
      // Assign the address of the current tail to be the newly created nde
      this.tail.next = nodeToBeAdded
      // Re-assign the tail to be the newly created node, that the old node now references with next
      this.tail = nodeToBeAdded
    }
    this.length++
  }

  private getToNodeAtIndex(index: number): { currentNode: ListNode<T>; previousNode: ListNode<T> | null } {
    let previousNode: ListNode<T> | null = null
    let currentNode = this.head

    if (index < 0 || index >= this.length) throw new Error('Illegal argument')
    if (index === 0) return { previousNode, currentNode }

    for (let iterator = 1; iterator < this.length; iterator++) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    return {
      previousNode,
      currentNode,
    }
  }

  private getNodeWhere(data: T) {
    let previousNode: ListNode<T> | null = null
    let currentNode = this.head
    for (let iterator = 0; iterator < this.length; iterator++) {
      if (currentNode.val === data) {
        return { previousNode, currentNode }
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return undefined
  }

  add(data: T) {
    this.addNodeToEnd(data)
  }

  insertFirst(data: T) {
    const newNodeToBeAdded = new ListNode(data)
    if (this.isEmpty) {
      // If this is emoty, the head and tail will be the same, which is the new one created
      this.head = newNodeToBeAdded
      this.tail = newNodeToBeAdded
    } else {
      // Grab a reference to the current head
      const nodeBeingReplaced = this.head
      // Replace the head with the newly created one
      this.head = nodeBeingReplaced
      // Make the new head node's next the displaced one.
      nodeBeingReplaced.next = nodeBeingReplaced
    }
    this.length++
  }

  insertAt(data: T, index: number) {
    if (this.isEmpty()) return this.add(data)
    const { previousNode, currentNode } = this.getToNodeAtIndex(index) || {}
    if (!currentNode || !previousNode) throw new Error(`Could not find node at index ${index}`)
    const nodeToInsert = new ListNode(data, currentNode)
    previousNode.next = nodeToInsert
    this.length++
  }

  addManyToEnd(list: T[]) {
    for (const item of list) {
      this.add(item)
    }
  }

  insertMany(data: T[], startPosition: number) {
    const { previousNode, currentNode } = this.getToNodeAtIndex(startPosition)
  }

  getFirst(): ListNode<T> | null {
    return this.head
  }

  getLast(): ListNode<T> | null {
    return this.tail
  }

  deleteFirst() {
    if (this.isEmpty()) return

    this.head = this.head.next
    this.length--

    if (this.isEmpty()) this.tail = null
  }

  deleteLast() {
    if (this.isEmpty()) return

    let previousNode: ListNode<T> | null = null
    let currentNode = this.head
    while (currentNode) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    if (!previousNode) throw new Error('Previous node is null')

    // At this point, `previousNode` will be one before the last
    previousNode.next = null
    this.tail = previousNode
    this.length--
  }

  deleteAt(index: number) {
    if (index === this.length - 1) return this.deleteLast()
    const { previousNode, currentNode } = this.getToNodeAtIndex(index)

    // previousNode should be the one behind the target at this point
    if (!previousNode) throw new Error('Previous node is falsy')
    previousNode.next = currentNode.next
    this.length--
  }

  deleteFrom(index: number) {
    if (this.isEmpty()) return
    const { currentNode } = this.getToNodeAtIndex(index)
    currentNode.next = null
    for (let iterator = index; index < this.length; iterator++) {
      this.length--
    }
  }

  // TODO: only works with primitives
  deleteWhere(data: T) {
    const { currentNode, previousNode } = this.getNodeWhere(data) || {}
    if (!currentNode) return
    previousNode.next = currentNode.next
    this.length--
  }

  // TODO: only works with primitives
  determineIfValueIsInList(data: T) {
    const { currentNode } = this.getNodeWhere(data) || {}
    return !!currentNode
  }

  clear() {
    // Seems simple, but do I need to set to null in order to garbage collect?
    // this.head = null
    // this.tail = null

    // Looping to set everything null
    let currentNode = this.head
    while (currentNode) {
      const nextNode = currentNode.next
      currentNode.next = null
      currentNode.val = null
      currentNode = nextNode
    }
    this.length = 0
  }

  *getItems() {}

  print() {}
}
