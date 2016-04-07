"use strict";
var array1_1 = require('./array1');
describe('Array1', function () {
    var subject;
    beforeEach(function () {
        subject = new array1_1.Array1(['A', 'B', 'C', 'D']);
    });
    describe('#constructor', function () {
        it('should init the array with data', function () {
            if (subject[0] == undefined)
                throw new Error('expected data');
        });
        it('should init the array with dimensions', function () {
            if (subject.length != 4)
                throw new Error('expected length to = 4');
        });
    });
    describe('#get', function () {
        it('should return element at coordinates', function () {
            var e = subject.get(1);
            if (e != 'B')
                throw new Error('expected element to = B');
        });
        it('should be safe (bounds checked) and not throw exception', function () {
            var e = subject.get(50);
            if (e != undefined)
                throw new Error('expected data to be undefined');
        });
    });
    describe('#set', function () {
        it('should set element at coordinates', function () {
            subject.set(1, 'Z');
            var e = subject.get(1);
            if (e != 'Z')
                throw new Error('expected element to = Z');
        });
        it('should be safe (bounds checked) and not throw exception', function () {
            try {
                subject.set(50, 'Z');
            }
            catch (ex) {
                throw new Error('expected set with illegal bounds to fail silently');
            }
        });
    });
    describe('[] (direct access)', function () {
        it('should set element at coordinates', function () {
            subject[1] = 'Z';
            var e = subject.get(1);
            if (e != 'Z')
                throw new Error('expected element to = Z');
        });
        it('should get element at coordinates', function () {
            var e = subject[1];
            if (e != 'B')
                throw new Error('expected element to = B');
        });
    });
    describe('#hashCode', function () {
        it('should return consistent hashcodes', function () {
            var a = (new array1_1.Array1(['A'])).hashCode();
            var b = (new array1_1.Array1(['A'])).hashCode();
            if (a !== b)
                throw new Error('expected the same hashcode');
        });
        it('should return different hashcodes when data has changed', function () {
            var a = (new array1_1.Array1(['A'])).hashCode();
            var b = (new array1_1.Array1(['B'])).hashCode();
            if (a === b)
                throw new Error('expected a different hashcode');
        });
    });
    describe('#sum', function () {
        it('should return the sum of all the numbers in the array', function () {
            var sum = (new array1_1.Array1([1, 1, 1])).sum();
            if (sum !== 3)
                throw new Error('expected the sum to = 3');
        });
    });
    describe('#avg', function () {
        it('should return the average of all the numbers in the array', function () {
            var avg = (new array1_1.Array1([1, 1, 1])).avg();
            if (avg !== 1)
                throw new Error('expected the avg to = 1');
        });
    });
    describe('#min', function () {
        it('should return the smallest of all the numbers in the array', function () {
            var min = (new array1_1.Array1([3, 1, -2])).min();
            if (min !== -2)
                throw new Error('expected the min to = -2');
        });
    });
    describe('#max', function () {
        it('should return the largest of all the numbers in the array', function () {
            var max = (new array1_1.Array1([0, 2, -2])).max();
            if (max !== 2)
                throw new Error('expected the max to = 2');
        });
    });
    describe('#each', function () {
        it('should enumerate the collection', function () {
            subject.each(function (e, i) {
                var expected = subject.get(i);
                if (e != expected)
                    throw new Error('expected iterator to resolve ' + expected);
            });
        });
        it('should preserve the calling context', function () {
            var preservesContext = true;
            subject.each(function (e, i) {
                if (!preservesContext)
                    throw new Error('expected each to preserve calling context');
            });
        });
        it('should break if a value is returned', function () {
            var loops = 0;
            subject.each(function (e, i) {
                loops++;
                return true;
            });
            if (loops !== 1)
                throw new Error('expected each to break');
        });
    });
});
