const sumAll = function(start, finish) {
    if (!Number.isInteger(start) || !Number.isInteger(finish)) return "ERROR";
    if (start < 0 || finish < 0) return "ERROR";
    if (start > finish) {
    const temp = start;
    start = finish;
    finish = temp;
  }
    let solution = 0;
    for (let i = start; i <= finish; i++) {
        solution += i;
    }
    return solution;
};

// Do not edit below this line
module.exports = sumAll;
