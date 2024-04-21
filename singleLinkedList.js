const Node = require("./singlyNodeStruct");

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

        return console.error(`Index (${index}) out of range --> at(index)`);
    }

    head() {
        /**
         * Get the first node
         */

        return this.#firstNode;
    }

    prepend(value) {
        /**
         * Append a new Node to the start of the list
         */

        const newFirstNode = new Node(value, this.#firstNode);
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

    find(value) {
        /**
         * returns the index of the node containing value, or null if not found.
         */
        if (this.contains(value)) {
            let tmpIndex = 0;
            let tmpNode = this.#firstNode;
            while (tmpNode instanceof Node) {
                if (`${tmpNode.value}` === value) return tmpIndex;
                tmpNode = tmpNode.nextNode;
                tmpIndex++;
            }
        }

        return null;
    }

    insertAt(value, index) {
        /**
         * inserts a new node with the provided value at the given index.
         */

        if (index < 0 || index > this.size() - 1) {
            console.error(`Index ${index} out of range`);
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        } else {
            let previousNode = this.at(index - 1);
            const newNode = new Node(value, previousNode.nextNode);
            previousNode.nextNode = newNode;
        }
    }

    removeAt(index) {
        /**
         * removes the node at the given index
         */
        if (index < 0 || index > this.size() - 1) {
            console.error(`Index ${index} out of range`);
            return;
        }

        if (index === 0) {
            this.#firstNode = this.#firstNode.nextNode;
            return;
        } else {
            let previousNode = this.at(index - 1);
            const nodeToDrop = this.at(index);
            previousNode.nextNode = nodeToDrop.nextNode;
            return;
        }
    }
};

module.exports = SLinkedList;
