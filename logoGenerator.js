var LETTERS = require('./letters');

var SPACE_BETWEEN_WORDS = '   ';
var logoGenerator = function (inputWord) {
    var lowerCaseWord = inputWord.toLowerCase();
    var numLines = 5;
    var letters = [];
    for (var i = 0; i < lowerCaseWord.length; i++) {
        letters.push(LETTERS[lowerCaseWord[i]]);
    }

    var finalString = '';
    for (var lineNumIdx = 0; lineNumIdx < numLines; lineNumIdx++) {
        for (var letterIdx = 0; letterIdx < letters.length; letterIdx++) {
            finalString += letters[letterIdx][lineNumIdx];
            finalString += SPACE_BETWEEN_WORDS;
        }
        finalString += '\n';
    }
    return finalString;
};

console.log(logoGenerator('abaaBBAA'));