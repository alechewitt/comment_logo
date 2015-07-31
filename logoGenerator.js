var LETTERS = require('./letters');

var COMMAND_OPTS = require("nomnom")
    .option('word', {
        abbr: 'w',
        help: 'Specify the word or sentence you wish to create into a commentlogo'
    })

    .parse();

var SPACE_BETWEEN_LETTERS = '   ';

var logoGenerator = function (inputWord) {
    var lowerCaseWord = inputWord.toLowerCase();
    // Replace all spaces with an 'S'
    lowerCaseWord = lowerCaseWord.split(" ").join("S");
    var numLines = 5;
    var letters = [];
    for (var i = 0; i < lowerCaseWord.length; i++) {
        letters.push(LETTERS[lowerCaseWord[i]]);
    }

    var finalString = '';
    for (var lineNumIdx = 0; lineNumIdx < numLines; lineNumIdx++) {
        for (var letterIdx = 0; letterIdx < letters.length; letterIdx++) {
            finalString += letters[letterIdx][lineNumIdx];
            finalString += SPACE_BETWEEN_LETTERS;
        }
        finalString += '\n';
    }
    return finalString;
};

var main = function() {
    if (!COMMAND_OPTS.word || COMMAND_OPTS.word === '') {
        console.log("Please specify a word or sentence to be made into a comment logo. run with -h to see options");
    }
    else {
        console.log(logoGenerator(COMMAND_OPTS.word));
    }
};

main();
