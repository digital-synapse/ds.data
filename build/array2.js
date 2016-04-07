"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var array1_1 = require('./array1');
var Array2 = (function (_super) {
    __extends(Array2, _super);
    function Array2() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        _super.call(this);
        this.Array2 = this;
        if (args.length === 1) {
            var a = args[0];
            for (var y = 0; y < a.length; y++) {
                this.push(a[y].slice());
            }
        }
        else if (args.length === 2) {
            var width = args[0], height = args[1];
            if (width > 0 && height > 0) {
                this.Array2.length = height;
                for (var i = 0; i < height; i++) {
                    this.Array2[i] = new Array(width);
                }
            }
        }
    }
    Object.defineProperty(Array2.prototype, "height", {
        get: function () {
            return !this.Array2 ? 0 : this.Array2.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Array2.prototype, "width", {
        get: function () {
            return (this.height != 0 && this.Array2[0]) ? this.Array2[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Array2.prototype.get = function (x, y) {
        if (this.inBounds(x, y))
            return this.Array2[y][x];
    };
    Array2.prototype.set = function (x, y, value) {
        if (this.inBounds(x, y))
            this.Array2[y][x] = value;
    };
    Array2.prototype.inBounds = function (x, y) {
        return (x > -1 && y > -1 && x < this.width && y < this.height);
    };
    Array2.prototype.rotateCounterClockwise = function () {
        var n = this.height;
        var a = this.copy();
        for (var i = 0; i < n / 2; i++) {
            for (var j = i; j < n - i - 1; j++) {
                var tmp = a[i][j];
                a[i][j] = a[j][n - i - 1];
                a[j][n - i - 1] = a[n - i - 1][n - j - 1];
                a[n - i - 1][n - j - 1] = a[n - j - 1][i];
                a[n - j - 1][i] = tmp;
            }
        }
        return a;
    };
    Array2.prototype.rotateClockwise = function () {
        var n = this.height;
        var a = this.copy();
        for (var i = 0; i < n / 2; i++) {
            for (var j = i; j < n - i - 1; j++) {
                var tmp = a[i][j];
                a[i][j] = a[n - j - 1][i];
                a[n - j - 1][i] = a[n - i - 1][n - j - 1];
                a[n - i - 1][n - j - 1] = a[j][n - i - 1];
                a[j][n - i - 1] = tmp;
            }
        }
        return a;
    };
    Array2.prototype.region = function (x1, y1, x2, y2) {
        if (this.inBounds(x1, y1) && this.inBounds(x2, y2)) {
            var width = (x2 - x1) + 1;
            var height = (y2 - y1) + 1;
            var tmp = new Array2(width, height);
            var yy = 0;
            for (var y = y1; y <= y2; y++) {
                var xx = 0;
                for (var x = x1; x <= x2; x++) {
                    tmp[yy][xx++] = this.Array2[y][x];
                }
                yy++;
            }
            return tmp;
        }
    };
    Array2.prototype.resize = function (width, height) {
        if (width > 0 && height > 0) {
            var tmp = this.copy();
            tmp.length = height;
            for (var i = 0; i < height; i++) {
                var row = tmp[i];
                if (!row)
                    tmp[i] = new Array(width);
                else {
                    row.length = width;
                }
            }
            return tmp;
        }
    };
    Array2.prototype.copy = function () {
        var tmp = [];
        for (var y = 0; y < this.height; y++) {
            tmp.push(this.Array2[y].slice());
        }
        return new Array2(tmp);
    };
    Array2.prototype.toString = function () {
        var s = '';
        for (var i = 0; i < this.height; i++) {
            s += this.Array2[i].toString() + ']\n';
        }
        return s;
    };
    Array2.prototype.hashCode = function () {
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
    Array2.prototype.column = function (columnIndex) {
        if (columnIndex > -1 && columnIndex < this.width) {
            var tmp = new array1_1.Array1();
            for (var y = 0; y < this.height; y++) {
                tmp.push(this[y][columnIndex]);
            }
            return tmp;
        }
    };
    Array2.prototype.row = function (rowIndex) {
        if (rowIndex > -1 && rowIndex < this.height) {
            return new array1_1.Array1(this[rowIndex]);
        }
    };
    Array2.prototype.each = function (callback) {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                if (callback(this[y][x], x, y))
                    return;
            }
        }
    };
    Array2.prototype.flatten = function () {
        var a = new array1_1.Array1();
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                a.push(this[y][x]);
            }
        }
        return a;
    };
    return Array2;
}(Array));
exports.Array2 = Array2;
