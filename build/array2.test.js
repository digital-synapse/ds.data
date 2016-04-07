"use strict";
var array2_1 = require('./array2');
describe('Array2', function () {
    var subject;
    beforeEach(function () {
        subject = new array2_1.Array2([
            ['A', 'B', 'C', 'D'],
            ['E', 'F', 'G', 'H'],
            ['I', 'J', 'K', 'L'],
            ['M', 'N', 'O', 'P'],
        ]);
    });
    describe('#constructor', function () {
        it('should init the array with data', function () {
            if (subject[0] == undefined)
                throw new Error('expected data');
        });
        it('should init the array with dimensions', function () {
            if (subject.width != 4 || subject.height != 4)
                throw new Error('expected width and height to = 4');
        });
    });
    describe('#rotateClockwise', function () {
        var r;
        beforeEach(function () {
            r = subject.rotateClockwise();
        });
        it('should return a new object', function () {
            if (r == subject)
                throw new Error('expected a new object');
        });
        it('should rotate the array data 90 degrees clockwise', function () {
            var expect = new array2_1.Array2([
                ['M', 'I', 'E', 'A'],
                ['N', 'J', 'F', 'B'],
                ['O', 'K', 'G', 'C'],
                ['P', 'L', 'H', 'D']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be rotated 90 degrees clockwise');
        });
    });
    describe('#rotateCounterClockwise', function () {
        var r;
        beforeEach(function () {
            r = subject.rotateCounterClockwise();
        });
        it('should return a new object', function () {
            if (r == subject)
                throw new Error('expected a new object');
        });
        it('should rotate the array data 90 degrees counter-clockwise', function () {
            var expect = new array2_1.Array2([
                ['D', 'H', 'L', 'P'],
                ['C', 'G', 'K', 'O'],
                ['B', 'F', 'J', 'N'],
                ['A', 'E', 'I', 'M']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be rotated 90 degrees counter-clockwise');
        });
    });
    describe('#resize', function () {
        it('should return a new object', function () {
            var r = subject.resize(2, 2);
            if (r == subject)
                throw new Error('expected a new object');
        });
        it('should reduce the array size and preserve data', function () {
            var r = subject.resize(2, 2);
            var expect = new array2_1.Array2([
                ['A', 'B'],
                ['E', 'F']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');
        });
        it('should increase the array size and preserve data', function () {
            var r = subject.resize(5, 4);
            var expect = new array2_1.Array2([
                ['A', 'B', 'C', 'D', undefined],
                ['E', 'F', 'G', 'H', undefined],
                ['I', 'J', 'K', 'L', undefined],
                ['M', 'N', 'O', 'P', undefined],
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing up');
        });
    });
    describe('#region', function () {
        var r;
        beforeEach(function () {
            r = subject.region(1, 1, 2, 2);
        });
        it('should return a new object', function () {
            if (r == subject)
                throw new Error('expected a new object');
        });
        it('should return a section from the array (inclusive)', function () {
            var expect = new array2_1.Array2([
                ['F', 'G'],
                ['J', 'K']
            ]);
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');
        });
    });
    describe('#column', function () {
        var r;
        beforeEach(function () {
            r = subject.column(1);
        });
        it('should return a new array', function () {
            if (r == subject.column(1))
                throw new Error('expected a new array');
        });
        it('should return a column of data', function () {
            var expect = ['B', 'F', 'J', 'N'];
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');
        });
    });
    describe('#row', function () {
        var r;
        beforeEach(function () {
            r = subject.row(1);
        });
        it('should return a new array', function () {
            if (r == subject.row(1))
                throw new Error('expected a new array');
        });
        it('should return a row of data', function () {
            var expect = ['E', 'F', 'G', 'H'];
            if (expect.toString() != r.toString())
                throw new Error('expected data to be preserved while resizing down');
        });
    });
    describe('#get', function () {
        it('should return element at coordinates', function () {
            var e = subject.get(1, 0);
            if (e != 'B')
                throw new Error('expected element to = B');
        });
        it('should be safe (bounds checked) and not throw exception', function () {
            var e = subject.get(50, 50);
            if (e != undefined)
                throw new Error('expected data to be undefined');
        });
    });
    describe('#set', function () {
        it('should set element at coordinates', function () {
            subject.set(1, 0, 'Z');
            var e = subject.get(1, 0);
            if (e != 'Z')
                throw new Error('expected element to = Z');
        });
        it('should be safe (bounds checked) and not throw exception', function () {
            try {
                subject.set(50, 50, 'Z');
            }
            catch (ex) {
                throw new Error('expected set with illegal bounds to fail silently');
            }
        });
    });
    describe('[] (direct access)', function () {
        it('should set element at coordinates', function () {
            subject[0][1] = 'Z';
            var e = subject.get(1, 0);
            if (e != 'Z')
                throw new Error('expected element to = Z');
        });
        it('should get element at coordinates', function () {
            var e = subject[0][1];
            if (e != 'B')
                throw new Error('expected element to = B');
        });
    });
    describe('#hashCode', function () {
        it('should return consistent hashcodes', function () {
            var a = (new array2_1.Array2([['A']])).hashCode();
            var b = (new array2_1.Array2([['A']])).hashCode();
            if (a !== b)
                throw new Error('expected the same hashcode');
        });
        it('should return different hashcodes when data has changed', function () {
            var a = (new array2_1.Array2([['A']])).hashCode();
            var b = (new array2_1.Array2([['B']])).hashCode();
            if (a === b)
                throw new Error('expected a different hashcode');
        });
    });
    describe('#each', function () {
        it('should enumerate the collection', function () {
            subject.each(function (e, x, y) {
                var expected = subject.get(x, y);
                if (e != expected)
                    throw new Error('expected iterator to resolve ' + expected);
            });
        });
        it('should preserve the calling context', function () {
            var preservesContext = true;
            subject.each(function (e) {
                if (!preservesContext)
                    throw new Error('expected each to preserve calling context');
            });
        });
        it('should break if a value is returned', function () {
            var loops = 0;
            subject.each(function (e) {
                loops++;
                return true;
            });
            if (loops !== 1)
                throw new Error('expected each to break');
        });
    });
    describe('#flatten', function () {
        it('should flatten the 2D array to a 1D Array', function () {
            var expected = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P';
            var flatten = subject.flatten().toString();
            if (flatten != expected)
                throw new Error('expected flat array' + expected);
        });
    });
    describe('#copy', function () {
        it('should return a new object', function () {
            if (subject == subject.copy())
                throw new Error('expected a new object');
        });
        it('should copy by value', function () {
            var expected = subject.toString();
            var copy = subject.copy().toString();
            if (copy != expected)
                throw new Error('expected 1:1 data copy');
        });
    });
});
