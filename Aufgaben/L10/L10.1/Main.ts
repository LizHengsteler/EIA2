  namespace L10_1_OldMacDonaldsFarm {
  /*Aufgabe: L09.1 OldMacDonaldsFarm
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 04.12.2021
  Zusammenarbeit: Hannah Sättele (Konzeptdurchsprache)
  Quellen: Praktikum mit Markus, Inverted Classroom, 
  
  */
  window.addEventListener("load", handleLoad);

  export let animals: Animal[] = [];
  export let stock: Stock[] = [];
  export let cow: Animal;
  export let chicken: Animal;
  export let dog: Animal;
  export let donkey: Animal;
  export let pig: Animal;

  export let wheat: Stock;
  export let seeds: Stock;
  export let treat: Stock;
  export let grass: Stock;
  export let grains: Stock;
  let output: HTMLDivElement;

  function handleLoad(_event: Event): void {
    console.log("handleLoad");
    cow =  new Cow ();
    chicken = new Chicken ();
    dog = new Dog ();
    donkey = new Donkey ();
    pig = new Pig ();
    

    animals.push(cow, chicken, dog, donkey, pig);

    wheat = new Stock("wheat", 400);
    seeds = new Stock("seeds", 350);
    treat = new Stock("treat", 40);
    grass = new Stock("grass", 600);
    grains = new Stock("grains", 1000);
    stock.push(wheat, seeds, treat, grass, grains);
    output = <HTMLDivElement>document.getElementById("output");

    console.log(animals[1].output());

    simulateDay();
  }

  function simulateDay(): void {
    for (let index: number = 0; index < animals.length; index++) {
      let displayOutput: HTMLSpanElement = <HTMLSpanElement>(
        document.createElement("span")
      );
      displayOutput.innerHTML += animals[index].output();// wie greif ich auf zb muuuh zu
      displayOutput.innerHTML += stock[index].showAmount();

      output.appendChild(displayOutput);
    }
  }

}