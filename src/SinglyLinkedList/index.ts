import { Node } from "./Node";

export class LinkedList {
  // head always points to first node
  // last node's next is always null
  head: Node | null;
  constructor() {
    this.head = null;
  }

  /*
    construct a node with data
    its next should be null as it is to be at end
    traverse till end to get last node
    last node's next should point to new node
  */
  insertAtEnd(data: string) {
    const node = new Node(data);
    node._next = null;
    let lastNode = this.traverseAndReturnLastNode();
    lastNode ? (lastNode._next = node) : (lastNode = node);
    if (!this.head) {
      this.head = node;
    }
  }

  /*
    traverse till lastNode
    also, get penultimateNode
    penultimateNode.next = null
  */
  deleteLastNode(): string {
    const penultimateNode = this.traverseAndReturnPenultimateNode(); // T=O(n)
    // O(n) + O(n)=O(n)
    let lastNode: any;
    
    if (!penultimateNode) {
      lastNode = this.traverseAndReturnLastNode();
      this.head = null;
    } else {
      lastNode = penultimateNode._next;
      penultimateNode._next = null;
    }
    let data = lastNode?._data;
    return data as string;
  }

  deleteList() {
    let currentNode = this.head as Node;
    let prevNode: Node | null = null;
    while (currentNode.next !== null) {
      prevNode && (prevNode._next = null);
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.head = null;
  }

  /*
    iterate over currentNode starting from head
    last node's next is null
    print each node meanwhile
  */
  traverseAndPrintNode() {
    let currentNode = this.head as Node;
    if (currentNode) {
      while (currentNode.next !== null) {
        console.log(currentNode._data);
        currentNode = currentNode.next;
      }
      console.log(currentNode._data);
    }
  }

  /* helper methods */

  /*
    iterate over currentNode starting from head
    last node's next is null
  */
  traverseAndReturnPenultimateNode(): Node {
    let currentNode = this.head as Node;
    let penultimateNode: Node | null = null;
    while (currentNode && currentNode.next !== null) {
      penultimateNode = currentNode;
      currentNode = currentNode.next;
    }
    return penultimateNode as Node;
  }

  traverseAndReturnLastNode(): Node {
    let currentNode = this.head as Node;
    while (currentNode && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  /*
    iterate over currentNode starting from head
    last node's next is null
  */
  traverseAndReturnLastEl(): string {
    let currentNode = this.head as Node;
    while (currentNode && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode._data as string;
  }

  isEmpty() {
    return !this.head;
  }
}
