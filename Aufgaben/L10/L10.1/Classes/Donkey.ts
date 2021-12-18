namespace L10_1_OldMacDonaldsFarm {
    export class Donkey extends Animal {

        constructor() {
           super("Darcy", "seeds", 10, "kickeriki", "fliegen");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.specialTalent;

        }
    }
}