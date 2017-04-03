# Linked List implementation in pure JavaScript

Linked lists are similar to arrays since they both store collections of data. They consist of one or more 'nodes'. Each node has a data field, which can contain any data and a next field, which stores a reference to the next node in the list. The last node has a reference of `null`.

The entry point of the linked list is called **head**. The head is not a separate node, but a reference to the first node in the linked list. If the linked list is empty, the head has a value of `null`

The linked list is a dynamic data structure and can grow and shrink on demand. Any application which has to deal with an unknown number of object will benefit with the use of linked lists.

One of biggest disadvantages of linked lists is that it does not allow direct access to individual elements. If you want to access a specific node, you had to traverse all nodes from the start (the head) to the particular item.

There are three types of linked lists - singly linked list, as described above. Doubly linked list, where every node has two references - one to the next node and one to the previous. The last type is circular linked list, where the last node of the list points to the first one.

**This repo implements the singly linked list.**

Although not that usefully for production, taken the dynamic nature of JS arrays, this project shows that it's possible to implement such data structure in plain JavaScript.