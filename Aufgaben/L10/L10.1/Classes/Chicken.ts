namespace L10_1_OldMacDonaldsFarm {
    export class Chicken extends Animal {

        constructor() {
           super("Darcy", "seeds", 10, "kickeriki", "flys high");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugriff auf id
        nameDiv.innerHTML += this.specialTalent;

        }
        output(): string {
            return `${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
          }
    }
}