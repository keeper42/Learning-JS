
// Created by LJF on 2017/01/14
// Modify "data structure and algorithm with javascript"
 
function HashTable() {
	this.table = new Array(127);
	this.value = [];
	this.put = put;
	this.get = get;
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.getRandomInt = getRandomInt;
	this.genStuData = genStuData;
}
 
function put(data) {
	// var pos = this.simpleHash(data);
	var pos = this.betterHash(data);
	this.table[pos] = data;
}
 
function put(key, data){
	var pos = this.betterHash(key);
	this.table[pos] = data;
}
 
function get(key) {
	return this.table[this.betterHash(key)];
}
 
// Hash string type
// The hash value is the remainder of the sum of the ASCII values divided by the length of the array
function simpleHash(data) {
	var total = 0;
	for(var i = 0; i < data.length; ++i){
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}
 
/* The hash value is the remainder of the ASCII code value divided by the length of the array 
   after multiplication by a smaller prime number 
*/
function betterHash(string) {
	const H = 37;
	var total = 0;
	for(var i = 0; i < string.length; ++i){
		total += H * total + string.charCodeAt(i);
	}
	total = total % arr.length;
	if(total < 0){
		total += this.table.length - 1;
	}
	return parseInt(total);
}
 
function showDistro() {
	var n = 0;
	for(var i = 0; i < this.table.length; ++i){
		if(this.table[i] != undefined){
			console.log(i + ": " + this.table[i]);
		}
	}
}
 
// Hash the integer type
function getRandomInt(min, max) {
	return Math.floor(Math.random()*(max - min + 1)) + min;
}
 
function genStuData(arr) {
	for(var i = 0; i < arr.legnth; ++i){
		var num = "";
		for(var j = 1; j <= 9; ++j){
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}
 
 
/* The open chain address method is used to solve the collision
   Chain of two consecutive cells, the first used to save the key, the second used to save data
*/
function buildChains() {
	for(var i = 0; i < this.table; ++i){
		this.table[i] = new Array();
	}
}
 
// Override the showDistro, put, get functions
function showDistro() {
	var n = 0; 
	for(var i = 0; i < this.table.length; ++i){
		if(this.table[i][0] != undefined){
			console.log(i + ": " + this.table[i]);
		}
	}
}
 
function put(key, data) {
	var pos = this.betterHash(key);
	var index = 0;
	if(this.table[pos][index] == undefined){
		this.table[pos][index++] = data;
	}else{
		while(this.table[pos][index] != undefined){
			++index;
		}
		this.table[pos][index+1] = data;
	}
}
 
function get(key) {
	var index = 0;
	var hash = this.betterHash(key);
	if(this.table[pos][index] == key){
		return this.table[pos][index+1];
	}
	
	else{
		while(this.table[pos][index] != key){
			index += 2;
		}
		return this.table[pos][index+1];
	}
	return undefined;
}
 
 
//Linear detection method to solve the collision
// Override the put and get functions
function put(key, data) {
	var pos = this.betterHash(key);
	if(this.table[pos] == undefined){
		this.table[pos] = key;
		this.values[pos] = data;
	}else{
		while(this.table[pos] != undefined){
			pos++;
			this.table[pos] = key;
			this.values[pos] = data;
		}
	}
}
 
function get(key) {
	var hash = -1;
	hash = this.betterHash(key);
	if(hash > -1){
		for(var i = hash; this.table[hash] != undefined; ++i){
			if(this.table[hash] == key){
				reutnr this.values[hash];
			}
		}
	}
	return undefined;
}
