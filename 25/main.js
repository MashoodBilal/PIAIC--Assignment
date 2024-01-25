"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alienColor;
// Version that passes the if test
alienColor = 'green';
if (alienColor === 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
// Version that fails the if test (no output)
alienColor = 'red';
if (alienColor === 'yellow') {
    console.log('Congratulations! You just earned 51o points.');
}
