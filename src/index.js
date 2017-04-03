class Node {
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

  push(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      const current = this.head;
      this.head = new Node(data, current);
    }

    this.size++;
  }

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
}