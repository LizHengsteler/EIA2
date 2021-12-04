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

    eat(): string {
      console.log("eat");
      return `<br>The ${this.type} named ${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings ${this.sound}.<br>`;
      
      // For- SChleife darin If-Bedinung checken, ob gleiche Bezeichnung
      /*for (let index = 0; index < animals.length; index++) {
        /*if(animals[index[2]] == stock [0])

      }*/
    }

    /*draw(): void {
            console.log("draw");
        }*/

    sing(_sound: string): void {
      console.log("sing");
      let displaySong: HTMLDivElement = <HTMLDivElement>(
        document.getElementById("song")
      );
      //displaySong.innerHTML = this.sound;

      for (let index: number = 0; index < animals.length; index++) {
        displaySong.innerHTML = this.sound;

      }
    }

    output(): string {
      return `<br>The ${this.type} named ${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
    }
  }
}
