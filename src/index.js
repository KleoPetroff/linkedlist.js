/**
 * The Node class which creates the linked list members
 */
class Node {
  /**
   * @param data - the value passed
   * @param next { null | Node } - the reference to the next Node in the linked list
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Prepend a new Node to the list and assign it to the head
   * @param data - the data value
   */
  insert(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      const current = this.head;
      this.head = new Node(data, current);
    }

    this.size++;
  }

  insertLast(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = new Node(data);
    }

    this.size++;
  }
  /**
   * Remove the last Node from the list
   */
  remove() {
    if (this.head === null) throw new Error('Cannot remove from empty linked list.');

    if (this.size === 1) {
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    this.size--;
  }

  /**
   * Remove the first element of the list
   * and reassign the head to the next element
   */
  removeFirst() {
    if (this.head === null) throw new Error('Cannot remove from empty linked list.');

    if (this.size === 1) {
      this.head = null;
      return;
    }

    this.head = this.head.next;
    this.size--;
  }
}