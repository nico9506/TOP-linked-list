# TOP-linked-list

TOP: Data structures practice. Includes single direction linked list
https://www.theodinproject.com/lessons/javascript-linked-lists

# Structure of a linked list

"A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.

Each node holds a single element of data and a link or pointer to the next node in the list.

A head node is the first node in the list, a tail node is the last node in the list. Below is a basic representation of a linked list:

[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null"

# This Linked List contains the following classes and methods

1. LinkedList class, which will represent the full list.
2. Node class, containing a value property and a link to the nextNode, both as null by default.

3. append(value) adds a new node containing value to the end of the list
4. prepend(value) adds a new node containing value to the start of the list
5. size returns the total number of nodes in the list
6. head returns the first node in the list
7. tail returns the last node in the list
8. at(index) returns the node at the given index
9. pop removes the last element from the list
10. contains(value) returns true if the passed in value is in the list and otherwise returns false.
11. find(value) returns the index of the node containing value, or null if not found.
12. toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
13. insertAt(value, index) that inserts a new node with the provided value at the given index.
14. removeAt(index) that removes the node at the given index.
