namespace L10_1_OldMacDonaldsFarm {
    export class Dog extends Animal {

        constructor() {
           super("Peanut", "treats", 5, "wooof", "hunts down chickens");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.specialTalent;

        }
    }
}