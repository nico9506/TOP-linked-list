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

    size() {
        /**
         * Get the number of nodes
         */

        let tmpNode = this.#firstNode;
        let totalNodes = 0;

        while (tmpNode instanceof Node) {
            totalNodes++;
            tmpNode = tmpNode.nextNode;
        }

        return totalNodes;
    }

    at(index) {
        /**
         * returns the node at the given index
         */

        let tmpNode = this.#firstNode;
        let totalNodes = 0;

        while (tmpNode instanceof Node) {
            if (totalNodes === index) return tmpNode;
            totalNodes++;
            tmpNode = tmpNode.nextNode;
        }

        return console.error(`Index (${index}) out of range`);
    }

    head() {
        /**
         * Get the first node
         */

        return this.#firstNode;
    }

    prepend(newFirstNode) {
        /**
         * Append a new Node to the start of the list
         */

        newFirstNode.nextNode = this.#firstNode;
        this.#firstNode = newFirstNode;
    }

    tail() {
        /**
         * Get the last node
         */

        return this.#checkAllNodes(this.#firstNode);
    }

    append(newValue) {
        /**
         * Append a new Node to the end of the list
         */

        const newNode = new Node(newValue);

        this.#firstNode === null
            ? (this.#firstNode = newNode)
            : (this.tail().nextNode = newNode);
    }

    pop() {
        /**
         * removes the last element from the list
         */

        this.at(this.size() - 2).nextNode = null;
    }

    contains(value) {
        /**
         *  returns true if the passed in value is in the list and otherwise returns false.
         */
        let tmpNode = this.#firstNode;

        while (tmpNode instanceof Node) {
            if (`${tmpNode.value}` === value) return true;
            tmpNode = tmpNode.nextNode;
        }

        return false;
    }

    find() {
        /**
         * returns the index of the node containing value, or null if not found.
         */
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
// console.log(`${sLL.head()}`);

// Set first node
// sLL.prepend(nodeTest);
// console.log(`${sLL.head()}`);
// console.log(`${sLL}`);

// Get last node
// console.log(`${sLL.tail()}`);

// # of nodes
// console.log(sLL.size());

// Get node at the given index
// console.log(`${sLL.at(0)}`);
// console.log(`${sLL.at(1)}`);
// console.log(`${sLL.at(4)}`);

// removes the last element from the list
// console.log(`${sLL}`);
// sLL.pop();
// console.log(`${sLL}`);

//  returns true if the passed in value is in the list and otherwise returns false.
// console.log(sLL.contains("nodeAux"));
// console.log(sLL.contains("nodeTest"));
