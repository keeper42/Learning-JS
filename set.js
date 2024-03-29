
// Created by LJF on 2017/01/14
// Reference and modify "data structure and algorithm with javascript"
// Set
function Set() {
	this.dataStore = [];
	this.size = size;
	this.add = add;
	this.remove = remove;
	this.show = show;
	this.contains = contains;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
}
 
function size() {
	return this.dataStore.length;
}
 
function add(data) {
	if(this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}
 
function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos, 1);
		return true;
	}else{
		return false;
	}
}
 
function show() {
	return this.dataStore;
}
 
function contains(data) {
	if(this.dataStore.indexOf(data) > -1){
		return true;
	}else{
		return false;
	}
}
 
function union(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; ++i){
		tempSet.add(this.dataStore[i]);
	}
	for(var i = 0; i < set.dataStore.length; ++i){
		if(!tempSet.contains(set.dataStore[i])){
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}
 
function intersect(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; ++i){
		if(set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}
 
function subset(set) {
	if(this.size() > set.size()){
		return false;
	}else{
		for each(var member in this.dataStore){
			if(!set.contains(member)){
				return false;
			}
		}
	}
	return true;
}

