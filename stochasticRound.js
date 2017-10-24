module.exports.stochasticRound = function(n) {
    var truncN = Math.trunc(n)
    if (n === null || isNaN(n)) { return NaN; }
    var p1 = n - truncN
    var p2 = n - p1
    var ran = Math.random(); // gen random number between 0 and 1
    if (ran < p1) return truncN;
    else if (ran < p2) return truncN + 1;
}