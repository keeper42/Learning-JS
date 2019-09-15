// Created by LJF on 2017/01/17.
//sort
function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.initial = initial;
	this.clear = clear;
	this.insert = insert;
	this.swap = swap;
	this.toString = toString;
	this.bubbleSort = bubbleSort;
	this.selectSort = selectSort;
	this.insertSort = insertSort;
	this.shellSort = shellSort;
	this.quickSort = quickSort;
	this.seqSearch = seqSearch;
	this.binSearch = binSearch;
}
 
function initial(numElements) {
	var myNums = new CArray(numElements);
	for(var i = 0; i < myNums.numElements; ++i){
		myNums.dataStore[i] = Math.floor(Math.random() * (myNums.numElements + 1));
	}
	console.log(myNums.toString());
	return myNums;
}
 
function clear() {
	for(var i = 0; i < this.dataStore.length; ++i){
		this.dataStore[i] = 0;
	}
}
 
function insert(element) {
	this.dataStore[this.pos++] = element;
}
 
function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
 
function toString() {
	var retstr = "";
	for(var i = 0; i < this.dataStore.length; ++i){
		retstr += this.dataStore[i] + " ";
		if((i+1) % 10 == 0){
			retstr += "\n";
		}
	}
	return retstr;
}
 
function bubbleSort() {
	var num = this.dataStore.length;
	for(var i = 0; i < num-1; ++i){
		for(var j = i + 1; j < num; ++j){
			if(this.dataStore[i] > this.dataStore[j]){
				swap(this.dataStore, i, j);
			}
		}
	}
	console.log(this.toString());
}
 
function selectSort() {
	var num = this.dataStore.length;
	for(var i = 0; i < num - 1; ++i){
		k = i;
		for(var j = i + 1; j < num; ++j){
			if(this.dataStore[k] > this.dataStore[j]){
				k = j;
			}
		}
		if(k != i){
			swap(this.dataStore, i, k);
		}
	}
	console.log(this.toString());
}
 
function insertSort() {
	var num = this.dataStore.length;
	for(var i = 1; i < num; ++i){
		var temp = this.dataStore[i];
		for(var j = i - 1; j >= 0 && this.dataStore[j] > temp; --j){
			this.dataStore[j + 1] = this.dataStore[j];
		}
		this.dataStore[j + 1] = temp;
	}
	console.log(this.toString());
}
 
function shellSort(gaps) {
	var num = this.dataStore.length;
	for(var k = 0; k < gaps.length; ++k){
		for(var i = gaps[k]; i < num; ++i){
			var temp = this.dataStore[i];
			for(var j = i; j >= gaps[k] && this.dataStore[j - gaps[k]] > temp; j -= gaps[k]){
				this.dataStore[j] = this.dataStore[j - gaps[k]];
			}
			this.dataStore[j] = temp;
		}
	}
	console.log(this.toString());
}
 
function quickSort(dataStore) {
	if(dataStore.length == 0){
		return [];
	}
	var less = [];
	var high = [];
	var index = dataStore[0];
	for(var i = 1; i < dataStore.length; ++i){
		if(dataStore[i] < index){
			less.push(dataStore[i]);
		}else{
			high.push(dataStore[i]);
		}
	}
	return quickSort(less).concat(index, quickSort(high));
}
 
// Self - organization search
function seqSearch(arr, data) {
	for(var i = 0; i < arr.length; ++i){
		if(arr[i] == data && i > (arr.length*0.2)){
			swap(arr, i, 0);
			return true;
		}else if(arr[i] == data){
			return true;
		}
	}
	return false;
}
 
// binSearch
function binSearch(arr, data) {
	var upper = arr.length - 1;
	var lower = 0;
	while(lower <= upper){
		var mid = Math.floor((upper + lower) / 2);
		if(arr[mid] < data){
			lower = mid + 1;
		}else if(arr[mid] > data){
			upper = mid - 1;
		}else{
			return mid;
		}
	}
	return -1;
}
 
var arr1 = initial(20);
arr1.bubbleSort();
var arr2 = initial(20);
arr2.selectSort();
var arr3 = initial(20);
arr3.insertSort();
var arr4 = initial(20);
var gaps = [5, 3, 1];
arr4.shellSort(gaps);
var arr5 = initial(20);
quickSort(arr5.dataStore).toString();

