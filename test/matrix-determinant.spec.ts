
var assert = require('assert');
import { determinant } from '../ts/matrix-determinant';

describe('matrix determinant', function () {
    it('return array element value for n = 1', function () {
        const result = determinant([[2]]);
        assert.equal(result, 2);
    });
    it('return -1 for n = 2', function () {
        const result = determinant([[1, 3], [2, 5]]);
        assert.equal(result, -1);
    });
    it('return 20 for n = 3', function () {
        const result = determinant([[2,5,3], [1,-2,-1], [1, 3, 4]]);
        assert.equal(result, -20);
    });
    it('return 30 for n = 4', function () {
        const result = determinant([[1, 0, 2, -1], [3, 0, 0, 5], [2, 1, 4, -3], [1, 0, 5, 0]]);
        assert.equal(result, 30);
    });
});

