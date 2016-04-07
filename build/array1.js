"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Array1 = (function (_super) {
    __extends(Array1, _super);
    function Array1(arg) {
        _super.call(this);
        if (arg) {
            if (arg.length) {
                for (var i = 0; i < arg.length; i++) {
                    this.push(arg[i]);
                }
            }
            else {
                this.length = length;
            }
        }
    }
    Array1.prototype.get = function (i) {
        if (this.inBounds(i))
            return this[i];
    };
    Array1.prototype.set = function (i, value) {
        if (this.inBounds(i))
            this[i] = value;
    };
    Array1.prototype.inBounds = function (i) {
        return (this.length && i > -1 && i < this.length);
    };
    Array1.prototype.sum = function () {
        var acc = 0;
        for (var i = 0; i < this.length; i++) {
            acc += this[i];
        }
        return acc;
    };
    Array1.prototype.avg = function () {
        var acc = this.sum();
        return acc / this.length;
    };
    Array1.prototype.min = function () {
        var min = Number.POSITIVE_INFINITY;
        for (var i = 0; i < this.length; i++) {
            var e = this[i];
            if (e < min)
                min = e;
        }
        return min;
    };
    Array1.prototype.max = function () {
        var max = Number.NEGATIVE_INFINITY;
        for (var i = 0; i < this.length; i++) {
            var e = this[i];
            if (e > max)
                max = e;
        }
        return max;
    };
    Array1.prototype.each = function (callback) {
        for (var i = 0; i < this.length; i++) {
            if (callback(this[i], i))
                break;
        }
    };
    Array1.prototype.hashCode = function () {
        var input = this.toString();
        var hash = 0, i, chr, len;
        if (input.length === 0)
            return hash;
        for (i = 0, len = input.length; i < len; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash;
    };
    return Array1;
}(Array));
exports.Array1 = Array1;
