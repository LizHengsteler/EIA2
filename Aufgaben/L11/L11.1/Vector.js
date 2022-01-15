"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        randomXY(_min, _max) {
            let lenght = Math.random() * (_max - _min) + _min;
            let direction = Math.random();
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(lenght);
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
    L11_1_GoldenerHerbst.Vector = Vector;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Vector.js.map