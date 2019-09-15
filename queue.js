
// Created by LJF on 2017/01/14
// Reference "data structure and algorithm with javascript"
 
//Queue
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	this.count = count;
}
 
function enqueue(element) {
	this.dataStore.push(element);
}
 
function dequeue(element) {
	return this.dataStore.shift();
}
 
function front() {
	return this.dataStore[0];
}
 
function back() {
	return this.dataStore[this.dataStore.length - 1];
}
 
function toString() {
	var retStr = "";
	for(var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}
 
function empty() {
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}
 
// Use the queue function to assign partners
function Dancer (name, sex) {
	this.name = name;
	this.sex = sex;
}
 
function getDancers(males, females) {
	var names = read("dancers.txt").split("\n");
	for (var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim();
	}
	for (var i  = 0; i < names.length; ++i){
		var dancer = names[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if(sex == "F"){
			femalesDancers.enqueue(new Dancer(name, sex));
		}else {
			malesDancers.enqueue(new Dancer(name, sex));
		}
	}
}
 
function dance(males, females) {
	console.log("The datce partners are: \n");
	while(!females.empty() && !males.empty()){
		person = females.dequeue();
		console.log("Female dancer is: " + person.name);
		person = males.dequeue();
		console.log(" and the male dancer is: " + person.name);
	}
}
 
// Use a queue for base number sorting
function distribute(nums, queues, n, digit) {    // for two bits number
	for(var i = 0; i < n; ++i){		
		if(digit == 1){
			queues[nums[i]%10].enqueue(nums[i]);
		}else{
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}
 
function collect(queues, nums) {
	var i = 0;f
	for(var digit = 0; digit < 10; ++digit){
		while(!queues[digit].empty()){
			nums[i++] = queues[digit].dequeue();
		}
	}
}
 
// Priority queues were used to simulate waiting
function Patient(name, code) {
	this.name = name;
	this.code = code;
}
 
function dequeue() {
	var priority = this.dataStore[0].code;
	for(var i = 1; i < this.dataStore.length; ++i){
		if(this.dataStore[i].code < priority){
			priority = i;
		}
	}
	return this.dataStore.splice(priority, 1);
}
 
function toString() {
	var retStr = "";
	for(var i = 0; i < this.dataStore; ++i){
		retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n"; 	
	}
	return retStr;
}
