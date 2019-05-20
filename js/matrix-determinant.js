"use strict";
exports.__esModule = true;
var iter = 0;
function determinant(matrix, n) {
    var det = 0, sign = 1, temp = initializeArray(n - 1);
    if (n === 1) {
        return matrix[0][0];
    }
    det = 0;
    for (var i = 0; i < n; i++) {
        currentSquareArray(matrix, temp, 0, i, n);
        det = det + sign * (matrix[0][i] * determinant(temp, n - 1));
        sign = -sign;
    }
    return det;
}
exports.determinant = determinant;
function initializeArray(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = [];
    }
    return arr;
}
function currentSquareArray(matrix, temp, p, q, size) {
    var i = 0, j = 0;
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
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
var result = determinant([[1, 0, 2, -1], [3, 0, 0, 5], [2, 1, 4, -3], [1, 0, 5, 0]], 4);
