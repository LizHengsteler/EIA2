namespace L11_2_GoldenerHerbst {
    
    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }
        
        public static getDifference(_v0: Vector, _v1: Vector): Vector {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }

        public static random(_min: number, _max: number): number {
            let value: number = Math. random() * (_max - _min) + _min;
            return value;
        }

        public get length(): number {
            return Math.hypot(this.x, this.y);
        }


        public randomXY(_min: number, _max: number): void {
            let length: number = Math.random() * (_max - _min) + _min;
            let direction: number = Math.random();

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        public randomY(_min: number, _max: number): void {
            let height: number = Math.random() * (_max - _min) + _min;
            this.sety(height);
        }

        public randomX(_min: number, _max: number): void {
            let lenght: number = Math.random() * (_max - _min) + _min;
            this.setx(lenght);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        public setx(_x: number): void {
            this.x = _x;
        }

        public sety(_y: number): void {
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }

        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
}