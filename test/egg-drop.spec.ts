
var assert = require('assert');
import { eggDrop } from '../ts/egg-drop';

describe('matrix determinant', function () {
    it('should return 3 for 3 eggs and 6 floors', function () {
        const result = eggDrop(3, 6);
        assert.equal(result, 3);
    });
    it('should return 4 for 2 eggs and 10 floors', function () {
        const result = eggDrop(2, 10);
        assert.equal(result, 4);
    });
});