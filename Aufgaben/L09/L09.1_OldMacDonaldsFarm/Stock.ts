namespace L09_1_OldMacDonaldsFarm {
  export class Stock {
    type: string;
    amount: number;

    constructor(_type: string, _amount: number) {
      //console.log("constructor");
      this.type = _type;
      this.amount = _amount;
    }

    substract(_substractionAmount: number): void {
      console.log("substract");
      this.amount = _substractionAmount - this.amount;
      this.showAmount();
    }

    showAmount(): string {
      return `<br>The ${this.type} named ${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
      

      
    }
  }
}
