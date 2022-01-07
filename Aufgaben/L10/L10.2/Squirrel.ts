namespace L10_2_GoldenerHerbst {
    export class Squirrel extends Moveable {
        position: Vector;
        size: number;

        constructor (_position: Vector, _size: number) {
            this.position = _position;
            this.size = _size;
        }
    }


}