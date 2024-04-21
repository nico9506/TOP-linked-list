const SLinkedList = require("./singleLinkedList.js");
const Node = require("./singlyNodeStruct.js");

/**
 * For testing
 */
const node1 = new Node("node1");
const nodeA = new Node("nodeA");
const nodeAux = new Node("nodeAux");

const sLL = new SLinkedList();

sLL.append(node1);
sLL.append(nodeA);
sLL.append(nodeAux);

// Whole list
// console.log(`${sLL}`);

// Get first node
// console.log(`${sLL.head()}`);

// Set first node
// sLL.prepend(123);
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

// returns the index of the node containing value, or null if not found.
// console.log(sLL.find("nodeAux"));
// console.log(sLL.find("nodeTest"));

// inserts a new node with the provided value at the given index.
console.log(`${sLL}`);
sLL.insertAt(123, 1);
console.log(`${sLL}`);

// removes the node at the given index
// console.log(`${sLL}`);
// sLL.removeAt(1);
// console.log(`${sLL}`);
