const reverseString = function(word) {
    const wordArr = word.split("");
    let reverseWord = "";
    for (let i = wordArr.length - 1; i >= 0; i--) {
        reverseWord += wordArr[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
