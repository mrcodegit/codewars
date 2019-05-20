"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let iter = 0;
function determinant(matrix) {
    let det = 0, sign = 1, temp = initializeArray(matrix.length - 1);
    if (matrix.length === 1) {
        return matrix[0][0];
    }
    det = 0;
    for (let i = 0; i < matrix.length; i++) {
        currentSquareArray(matrix, temp, 0, i, matrix.length);
        det = det + sign * (matrix[0][i] * determinant(temp));
        sign = -sign;
    }
    return det;
}
exports.determinant = determinant;
function initializeArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    return arr;
}
function currentSquareArray(matrix, temp, p, q, size) {
    let i = 0, j = 0;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (row != p && col != q) {
                temp[i][j++] = matrix[row][col];
                if (j == size - 1) {
                    j = 0;
                    i++;
                }
            }
        }
    }
}
const result = determinant([[1, 0, 2, -1], [3, 0, 0, 5], [2, 1, 4, -3], [1, 0, 5, 0]]);
