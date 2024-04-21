const Node = class {
    /**
     * @param {string} value Node value
     * @param {Node} nextNode direction to the next Node in this linked list
     */

    #value = null;
    #nextNode = null;

    constructor(value, nextNode) {
        this.#value = value;
        this.#nextNode = nextNode;
    }

    toString() {
        return `${this.#value}`;
    }

    get value() {
        return this.#value;
    }

    get nextNode() {
        return this.#nextNode;
    }

    set value(newValue) {
        this.#value = newValue;
    }

    set nextNode(newNextNode) {
        this.#nextNode = newNextNode;
    }
};

const SLinkedList = class {
    /**
     * Creates an Object with a single Node, which represents the very first
     * Node of the linked list.
     */

    #firstNode = null;

    constructor() {
        this.#firstNode = null;
    }

    #checkAllNodes(startNode) {
        return !(startNode.nextNode instanceof Node)
            ? startNode
            : this.#checkAllNodes(startNode.nextNode);
    }

    toString() {
        let tmpNode = this.#firstNode;
        let printedList = "";

        while (tmpNode instanceof Node) {
            printedList += `-->(${tmpNode})`;
            tmpNode = tmpNode.nextNode;
        }

        return printedList;
    }

    // get size() {
    //     return this.#sLinkedList.length;
    // }

    get head() {
        return this.#firstNode;
    }

    set head(newFirstNode) {
        newFirstNode.nextNode = this.#firstNode;
        this.#firstNode = newFirstNode;
    }

    get tail() {
        return this.#checkAllNodes(this.#firstNode);
    }

    append(newValue) {
        /**
         * Append a new Node to the end of the list
         */

        const newNode = new Node(newValue);

        this.#firstNode === null
            ? (this.#firstNode = newNode)
            : (this.tail.nextNode = newNode);
    }
};

/**
 * For testing
 */
const node1 = new Node("node1");
const nodeA = new Node("nodeA");
const nodeAux = new Node("nodeAux");
const nodeTest = new Node("nodeTest");

const sLL = new SLinkedList();

sLL.append(node1);
sLL.append(nodeA);
sLL.append(nodeAux);

// Whole list
// console.log(`${sLL}`);

// Get first node
// console.log(`${sLL.head}`);

// Set first node
// sLL.head = nodeTest;
// console.log(`${sLL.head}`);
// console.log(`${sLL}`);

// Get last node
// console.log(`${sLL.tail}`);
