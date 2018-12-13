module.exports = Phrase;
// Adds reverse to all strings
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content;
    //Retruns the letters in the content.
    this.letters = function letters() {
        const lettersRegEx = /[a-z]/gi;
        return (this.content.match(lettersRegEx) || []).join("");
    }

    //returns content processed for palindrome testing.
    this.processedContent = function () {
        return this.letters().toLowerCase();
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
let adam = new Phrase("Madam, I'm Adam.")
console.log(napoleonsLament.palindrome());
console.log(adam.palindrome());