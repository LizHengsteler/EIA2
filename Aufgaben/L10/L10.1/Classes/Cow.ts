namespace L10_1_OldMacDonaldsFarm {
    export class Cow extends Animal {

        constructor() {
           super("Paula", "wheat", 10, "muuuuh", "shows her tongue because its purple");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugriff auf id
        nameDiv.innerHTML += this.specialTalent;

        }
    }
}