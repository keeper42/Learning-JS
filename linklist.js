
// Created by LJF on 2017/01/14
// Modify "data structure and algorithm with javascript"
 
// LinkList
function Node(element) {
	this.element = element;
	this.next = null;
}
 
function LinkList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.display = display;
}
 
function find(item) {
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
}
 
function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}
 
function findPrevious(item) {
	var currNode = this.head;
	while(!(currNode.next = null) && (currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
}
 
function remove(item) {
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}
 
function display() {
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}
 
 
// Two-way linked list
function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}
 
function LinkList2() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findLast = findLast;
	this.display = display;
	this.dispReverse = dispReverse;
}
 
function find(item) {
	var currNode = this.head;
	while(currNode.next.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
 
function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next.previous = newNode;
	current.next = newNode;
}
 
function findLast() {
	var currNode = this.head;
	while(currNode.next != null){
		currNode = currNode.next;
	}
	return currNode;
}
 
function remove(item) {
	var currNode = this.find(item);
	if(currNode.next != null){
		currNode.previous.next = currNode.next;
		currNode.newx.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}
 
function display() {
	var currNode = this.head;
	while(currNode.next != null){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}
 
function dispReverse() {
	var currNode = this.head;
	currNode = this.findLast();
	while(currNode.previous != null){
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

