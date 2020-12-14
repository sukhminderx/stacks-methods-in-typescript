import { LinkedList } from "../SinglyLinkedList";

export class Stack {
    private values: LinkedList | null = null;

    constructor() {
        // initialize the values to LnkedList object
        this.values = new LinkedList();
    }

    /*
        add data as Node to end of the LinkedList
    */
    push(data: string) {
        this.values?.insertAtEnd(data);
    }

    /*
        delete last Node of LinkedList and return value
    */
    pop(): string {
        return this.values?.deleteLastNode() as string;
    }

    /*
        traverseAndReturnLastNode method of LinkedList
    */
    top(): string {
        return this.values?.traverseAndReturnLastEl() as string;
    }

    delete() {
        this.values?.deleteList();
    }

    isEmpty () {
        return this.values?.isEmpty();
    }

    print() {
        this.values?.traverseAndPrintNode();
    }


}