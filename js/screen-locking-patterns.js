"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countPatternsFrom(firstDot, length) {
    let result = 0;
    if (length === 0) {
        return 0;
    }
    if (['A', 'C', 'G', 'I'].includes(firstDot)) {
        firstDot = 1;
    }
    else if (['B', 'D', 'F', 'H'].includes(firstDot)) {
        firstDot = 2;
    }
    else {
        firstDot = 5;
    }
    const jump = [...Array(10)].map(arr => Array(10).fill(0));
    jump[1][3] = jump[3][1] = 2;
    jump[7][9] = jump[9][7] = 8;
    jump[1][7] = jump[7][1] = 4;
    jump[3][9] = jump[9][3] = 6;
    jump[1][9] = jump[9][1] = jump[2][8] = jump[8][2]
        = jump[3][7] = jump[7][3] = jump[4][6] = jump[6][4] = 5;
    const visited = Array(10).fill(0);
    result = patternsFromfirstDot(visited, jump, firstDot, length - 1);
    return result;
}
exports.countPatternsFrom = countPatternsFrom;
function patternsFromfirstDot(visited, jump, firstDot, length) {
    const numberOfCells = 9;
    if (length === 0) {
        return 1;
    }
    let ways = 0;
    visited[firstDot] = 1;
    for (let i = 1; i <= numberOfCells; i++) {
        if (!visited[i] && (!jump[firstDot][i] || visited[jump[firstDot][i]])) {
            ways += patternsFromfirstDot(visited, jump, i, length - 1);
        }
    }
    visited[firstDot] = 0;
    return ways;
}
