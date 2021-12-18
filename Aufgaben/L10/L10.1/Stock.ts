namespace L10_1_OldMacDonaldsFarm {
    export class Stock {
        type: string;
        amount: number;
    
        constructor(_type: string, _amount: number) {
          //console.log("constructor");
          this.type = _type;
          this.amount = _amount;
        }
    
        showAmount(): string {
          //this.amount = this.amount - _substractionAmount.amount;
          return `<br>There is ${this.amount} left of ${this.type}.<br>`;
        }
        //Hab die Rechnung nicht hinbekommen :(
      }
}