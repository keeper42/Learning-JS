// Created by LJF on 2017/01/14
// Reference "data structure and algorithm with javascript"
 
function Dictionary() {
	this.add = add;
	this.datastore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}
 
function add(key, value) {
	this.datastore[key] = value;
}
 
function find(key) {
	return this.datastore[key];
}
 
function remove(key) {
	delete this.datastore[key];
}
 
function showAll() {
	for(var key in Object.keys(this.datastore).sort()){
		console.log(key + " -> " + this.datastore[key]);
	}
}
 
function count() {
	var n = 0;
	for each(var key in Object.keys(this.datastore)){
		++n;
	}
	return n;
}
 
function clear() {
	for each(var key in Object.keys(this.datastore)){
		delete this.datastore[key];
	}
}
