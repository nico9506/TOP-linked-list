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

module.exports = Node;
