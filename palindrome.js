// Adds reverse to all strings
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

Array.prototype.lastElement = function () {
    return this[this.length - 1];
}

function Phrase(content) {
    this.content = content;
    this.processor = function (string) {
        return string.toLowerCase();
    }
    //returns content processed for palindrome testing.
    this.processedContent = function () {
        return this.processor(this.content);
    }

    //Returns true if content is a palindrome
    this.palindrome = function () {
        return this.processedContent() === this.processedContent().reverse();
    }

    //Returns capital letter of passed function
    this.louder = function () {
        return this.content.toUpperCase();
    }
}

let napoleonsLament = new Phrase("Able was I ere I saw Elba");
let adam = new Phrase("Madam, I am Adam.")
console.log(napoleonsLament.palindrome());
let arr = [1, 2, 4, 22, 500];
console.log(arr.lastElement());
console.log(adam.palindrome());