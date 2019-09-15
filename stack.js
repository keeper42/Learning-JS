
// Created by LJF on 2017/01/14
// Reference "data structure and algorithm with javascript"
 
//Stack
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
}
 
function push(element) {
	this.dataStore[this.top++] = element;
}
 
function pop() {
	return  this.dataStore[--this.top];
}
 
function peek() {
	return this.dataStore[this.top-1];
}
 
function length(){
	return this.top;
}
 
function clear() {
	this.top = 0;
}
 
// The conversion between the number of base
function mulBase(num, base) {
	var s = new Stack();
	do{
		s.push(num % base);
		num = Math.floor(num /= base);
	}while(num > 0);
	var converted = "";
	while(s.length() > 0){
		converted += s.pop();
	}
	return converted;
}
 
// Determine whether the string is a palindrome
function isPalindrome(word) {
	var s = new Stack();
	for(var i = 0; i < word.length; ++i){
		s.push(word[i]);
	}
	var rword = "";
	while(s.length() > 0){
		rword += s.pop();
	}
	if(word == rword){
		return true;
	}else{
		return false;
	}
}
 
// Use the stack to simulate a recursive process
function fact(n) {
	var s = new Stack();
	whiel(n > 1){
		s.push(n--);
	}
	var product = 1;
	while(s.length() > 0){
		product *= s.pop();
	}
	return product;
}