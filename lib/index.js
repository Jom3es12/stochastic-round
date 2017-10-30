#! /usr/bin/env node
var prog = require('commander');
module.exports.stochasticRound = function(n) {
        // trucN just removes the numbers after the decimal. '5.61' turns to '5'
        var truncN = Math.trunc(n)
        if (n === null || isNaN(n)) { return NaN; }
        // Probilities one and two, first probability is the percent chance it has of going up a number. The inverse is true for the second probability.
        var p1 = n - truncN
        var p2 = n - p1
        var ran = Math.random(); // Generates a random number 
        if (ran < p1) return truncN;
        else if (ran < p2) return truncN + 1;
    }
    // 
prog
    .arguments('<number>')
    .action(function(n) {
        var truncN = Math.trunc(n)
        if (n === null || isNaN(n)) { return NaN; }
        var p1 = n - truncN
        var p2 = n - p1
        var ran = Math.random();
        if (ran < p1)  console.log(truncN);
        else if (ran < p2) console.log(truncN + 1);
    })
    .parse(process.argv);
