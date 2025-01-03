const repeatString = function(word, num) {
    let returnString = "";
    if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++) {
        returnString += word;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
