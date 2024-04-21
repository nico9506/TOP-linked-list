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

    // #sLinkedList;

    constructor() {
        this.sLinkedList = [new Node()];
    }

    toString() {
        this.sLinkedList.forEach((node) => {
            console.log(`--> (${node.value})`);
        });
    }

    addNode(newNode) {
        if (newNode instanceof Node) {
            this.sLinkedList.push(newNode);
        } else {
            console.error("Node object parameter required!");
        }
    }
};

/**
 * For testing
 */
const node1 = new Node("node1");
const nodeA = new Node("nodeA");
const nodeTest = new Node("nodeTest");

const sLL = new SLinkedList();

sLL.addNode(node1);
sLL.addNode(nodeA);
sLL.addNode(nodeTest);

sLL.toString();
