"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static random(_min, _max) {
            let value = Math.random() * (_max - _min) + _min;
            return value;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        randomXY(_min, _max) {
            let length = Math.random() * (_max - _min) + _min;
            let direction = Math.random();
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        randomY(_min, _max) {
            let height = Math.random() * (_max - _min) + _min;
            this.sety(height);
        }
        randomX(_min, _max) {
            let lenght = Math.random() * (_max - _min) + _min;
            this.setx(lenght);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setx(_x) {
            this.x = _x;
        }
        sety(_y) {
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L11_2_GoldenerHerbst.Vector = Vector;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Vector.js.map