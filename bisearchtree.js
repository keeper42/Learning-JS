// Created by LJF on 2017/01/14
// Reference and modify "data structure and algorithm with javascript"
// BinaryTree
function Node(data, left, right) {
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;
}
 
function show() {
	return this.data;
}
 
function BST() {
	this.root = null;
	this.insert = insert;
	this.preOrder = preOrder;
	this.inOrder = inOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove;
}
 
function insert(data) {
	var n = new Node(data, null, null);
	if(this.root == null){
		this.root = n;
	}else{
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			}else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}
 
function preOrder(node) {
	if(node != null){
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}
 
function inOrder(node) {
	if(node != null){
		inOrder(node.left);
		console.log(node.show() + " ");
		inOrder(node.right);
	}
}
 
function postOrder(node) {
	if(node != null){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}
 
function getMin() {
	var current = this.root;
	while(current.left != null){
		current = current.left;
	}
	return current.data;
}
 
function getMax() {
	var current = this.root;
	while(current.right != null){
		current = current.right;
	}
	return current.data;
}
 
function find(data) {
	var current = this.root;
	while(current != null){
		if(data == current.data){
			return current;
		}else if(data < current.data){
			current = current.left;
		}else{
			current = current.right;
		}
	}
	return null;
}
 
function remove(data) {
	root = removeNode(this.root, data);
}
 
function remoNode(node, data) {
	if(node == null){
		return null;
	}
	if(data == node.data){
		if(node.left == null && node.right == null){
			return null;
		}
		if(node.left == null){
			return node.right;
		}
		if(node.right == null){
			return node.left;
		}
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}else if(data < node.data){
		node.left = removeNode(node.left, data);
		return node;
	}else{
		node.right = removeNode(node.right, data);
		return node;
	}
}
 
function update (data) {
	var grade = this.find(data);
	grade.count++;
	return grade;
}
 
function prArray(arr) {
	console.log(arr[0].toString() + " ");
	for(var i = 1; i < arr.length; ++i){
		console.log(arr[i].toString() + " ");
		if(i % 10 == 0){
			console.log("\n");
		}
	}
}
 
function genArray(length) {
	var arr = [];
	for(var i = 0; i < length; ++i){
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}
