"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *******************************************************/
const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];

// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!
// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal

let winner = null;
let size = BATTLEFIELD.length;

/***********************
 * Horizontal Check
 ***********************/
for (let i = 0; i < size; i++) {
    let first = BATTLEFIELD[i][0];

    if (first === null) continue;

    let same = true;

    for (let j = 1; j < size; j++) {
        if (BATTLEFIELD[i][j] !== first) {
            same = false;
        }
    }

    if (same) {
        winner = first;
    }
}

/***********************
 * Vertical Check
 ***********************/
for (let j = 0; j < size; j++) {
    let first = BATTLEFIELD[0][j];

    if (first === null) continue;

    let same = true;

    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][j] !== first) {
            same = false;
        }
    }

    if (same) {
        winner = first;
    }
}

/***********************
 * Main Diagonal
 ***********************/
let firstMain = BATTLEFIELD[0][0];

if (firstMain !== null) {
    let same = true;

    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][i] !== firstMain) {
            same = false;
        }
    }

    if (same) {
        winner = firstMain;
    }
}

/***********************
 * Anti Diagonal
 ***********************/
let firstAnti = BATTLEFIELD[0][size - 1];

if (firstAnti !== null) {
    let same = true;

    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][size - 1 - i] !== firstAnti) {
            same = false;
        }
    }

    if (same) {
        winner = firstAnti;
    }
}

/***********************
 * Output
 ***********************/
if (winner !== null) {
    console.log("Winner is: " + winner);
} else {
    console.log("No winner yet!");
}