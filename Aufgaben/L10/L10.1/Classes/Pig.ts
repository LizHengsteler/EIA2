namespace L10_1_OldMacDonaldsFarm {
    export class Pig extends Animal {

        constructor() {
           super("Peppa", "grains", 20, "oink", "farts while eating");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.specialTalent;

        }
    }
}