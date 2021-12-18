namespace L10_1_OldMacDonaldsFarm {
    export class Animal {
        
        name: string;
        food: string;
        amountFood: number;
        sound: string;
        specialTalent: string;
    
        constructor(
          
          _name: string,
          _food: string,
          _amountFood: number,
          _sound: string,
          _specialTalent: string
        ) {
          //console.log("constructor");
          
          this.name = _name;
          this.food = _food;
          this.amountFood = _amountFood;
          this.sound = _sound;
          this.specialTalent = _specialTalent;
        }
    
       
      }
}