namespace L09_1_OldMacDonaldsFarm {
  export class Stock {
    type: string;
    amount: number;

    constructor(_type: string, _amount: number) {
      //console.log("constructor");
      this.type = _type;
      this.amount = _amount;
    }

   

    showAmount(): string {
      let subAmount: number = this.amount - _amountFood;
      //this.amount = this.amount - _substractionAmount.amount;
      return `<br>There is ${subAmount} left of ${this.type}.<br>`;
      
      

      
    }
  }
}
