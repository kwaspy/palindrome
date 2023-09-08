function reverse(string){
	return Array.from(string).reverse().join("");
}

function palindrome(string){
	let processedContent = string.toLowerCase()
	return processedContent === reverse(processedContent);
}

function Phrase(content){
	this.content = content;
	
	this.processedContent = function processedContent(){
		return this.processor(this.content);
	}

	this.palindrome = function palindrome(){
		return this.processedContent() === this.processedContent().reverse();
	}

	this.louder = function(){
		return this.content.toUpperCase();
	}

	this.processor = function(string){
		return string.toLowerCase();
	}
}

function TranslatedPhrase(content, translation){
	this.content = content;
	this.translation = translation;

	this.processedContent = function processedContent(){
		return this.processor(this.translation);
	}
}
TranslatedPhrase.prototype = new Phrase();

String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
	return !!this.match(/^\s*$/);
}

Array.prototype.last = function() {
	return this.slice(-1)[0];
}
