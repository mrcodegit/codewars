import { countPatternsFrom } from "../ts/screen-locking-patterns";

var assert = require('assert');

describe('screen-locking-patterns', function () {
    it('should return 0 patterns', function () {
        const result = countPatternsFrom('A', 0);
        assert.equal(result, 0);
    });
    it('should return 0 patterns', function () {
        const result = countPatternsFrom('A', 10);
        assert.equal(result, 0);
    });
    it('should return 1 pattern', function () {
        const result = countPatternsFrom('B', 1);
        assert.equal(result, 1);
    });
    it('should return 5 patterns', function () {
        const result = countPatternsFrom('C', 2);
        assert.equal(result, 5);
    });
    it('should return 37 pattern', function () {
        const result = countPatternsFrom('D', 3);
        assert.equal(result, 37);
    });
    it('should return 256 pattern', function () {
        const result = countPatternsFrom('E', 4);
        assert.equal(result, 256);
    });
    it('should return 256 pattern', function () {
        const result = countPatternsFrom('E', 8);
        assert.equal(result, 23280);
    });
});