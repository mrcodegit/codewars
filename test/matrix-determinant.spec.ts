
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
});