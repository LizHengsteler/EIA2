namespace L09_1_OldMacDonaldsFarm {
    export class Stock {
        type: string;
        amount: number;

        constructor (_type: string, _amount: number) {
            //console.log("constructor");
            this.type = _type;
            this.amount = _amount;
        }
    

        substract(_substractionAmount: number): void {
            console.log("substract");
            this.amount = _substractionAmount - _amount;
            this.showAmount();
        }

        showAmount(): void {
            console.log("showAmount");
            let displayAmount: HTMLDivElement = <HTMLDivElement>document.getElementById("amount");
         
            for (let index: number = 0; index < stock.length; index++) {
                displayAmount.innerHTML = this.amount[index];
            }
            }
            
            
            

        }
    }
