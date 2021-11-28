import { SingleLinkedList } from './'

describe('Single Linked List', () => {
  test('A new list is considered empty', () => {
    const List = new SingleLinkedList()
    const isEmpty = List.isEmpty()
    expect(isEmpty).toBe(true)
  })
  test('Creating a list with a node makes the list no longer empty', () => {
    const List = new SingleLinkedList(1)
    const isEmpty = List.isEmpty()
    expect(isEmpty).toBe(false)
  })
  test('Adding a node makes the list no longer empty', () => {
    const List = new SingleLinkedList()
    List.add(1)
    const isEmpty = List.isEmpty()
    expect(isEmpty).toBe(false)
  })
  test('Adding a node will place it at the head and tail', () => {
    const List = new SingleLinkedList(1)
    const Head = List.getFirst()
    const Tail = List.getLast()
    expect(Head).not.toBe(null)
    expect(Tail).not.toBe(null)
    expect(Head.val).toBe(1)
    expect(Tail.val).toBe(1)
  })
  test('Inserting a node at the beginning will properly update', () => {
    const List = new SingleLinkedList(1)
    List.insertFirst(2)
    const Head = List.getFirst()
    expect(Head.val).toBe(2)
  })
  test('Inserting a node at the end will properly update', () => {
    const List = new SingleLinkedList(1)
    List.add(2)
    const Tail = List.getLast()
    expect(Tail.val).toBe(2)
  })
})
