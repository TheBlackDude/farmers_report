const assert = require('assert');
const isEqual = require('./isEqual');
const getBagCounts = require('./getBagCounts');

describe("isEqual Helper", () => {

    it("Compares two Arrays", () => {

        assert.deepEqual(
            isEqual([1, 2, 3, 'name'], [1, 2, 3, 'name']),
            true
        );

        assert.deepEqual(
            isEqual([1, 2, 3, 'name', 4], [1, 2, 3, 'name', 5]),
            false
        );
    });

    it("Compares two Objects", () => {

        assert.deepEqual(
            isEqual(
                [{name: 'joe', age: 7, love: ['blue', 'yellew', { key: 'magic' }]}],
                [{name: 'joe', age: 7, love: ['blue', 'yellew', { key: 'magic' }]}]
            ),
            true
        );

        assert.deepEqual(
            isEqual({name: 'sam', age: 25}, {name: 'sam', age: 26}),
            false
        );
    });
});

describe("BagCounts", () => {

    it("throws an error if availableBagSizes is more than 3", () => {

        const error = new Error('you can only have 3 bags');
        assert.throws(function(){ getBagCounts([10], [1, 2, 3, 4])}, error);
    });
    
    it("throws an error if availableBagSizes is not [1, 2, 4]", () => {

        const error = new Error('We only support [1, 2, 4] bag sizes for now');
        assert.throws(function(){ getBagCounts([10], [1, 2, 3])}, error);
    });

    it("throws an error on single order if inValid order is passed", () => {

        const error = new Error('InValid Order');
        assert.throws(function(){ getBagCounts([1.25], [1, 2, 4])}, error);
    });

    it("returns the correct bag size counts for a single order", () => {

        const result = getBagCounts([9], [1, 2, 4]);
        assert.deepEqual(result, [
            { size: 4, count: 2 },
            { size: 2, count: 0 },
            { size: 1, count: 1 }
        ]);
    });

    it("returns the correct bag size counts for multiple orders", () => {

        const results = getBagCounts([10, 9, 8], [1, 2, 4]);
        assert.deepEqual( results, [
            [
              { size: 4, count: 2 },
              { size: 2, count: 1 },
              { size: 1, count: 0 }
            ],
            [
              { size: 4, count: 2 },
              { size: 2, count: 0 },
              { size: 1, count: 1 }
            ],
            [
              { size: 4, count: 2 },
              { size: 2, count: 0 },
              { size: 1, count: 0 }
            ]
        ]);
    });

    it("returns the correct bag size counts and an Error message if there is an inValid order", () => {

        const results = getBagCounts([10, 1.10], [1, 2, 4]);
        assert.deepEqual( results, [
            [
              { size: 4, count: 2 },
              { size: 2, count: 1 },
              { size: 1, count: 0 }
            ],
            [ 'InValid Order' ]
        ]);
    });
});