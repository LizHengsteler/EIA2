namespace L09_1_OldMacDonaldsFarm {
  export class Animal {
    type: string;
    name: string;
    food: string;
    amountFood: number;
    sound: string;

    constructor(
      _type: string,
      _name: string,
      _food: string,
      _amountFood: number,
      _sound: string
    ) {
      //console.log("constructor");
      this.type = _type;
      this.name = _name;
      this.food = _food;
      this.amountFood = _amountFood;
      this.sound = _sound;
    }

    output(): string {
      return `<br>The ${this.type} named ${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
    }
  }
}
