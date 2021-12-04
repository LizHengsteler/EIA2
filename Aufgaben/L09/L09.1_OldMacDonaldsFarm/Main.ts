namespace L09_1_OldMacDonaldsFarm {
  /*Aufgabe: L09.1 OldMacDonaldsFarm
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 04.12.2021
  Zusammenarbeit: Theo Züffle, Kristoffer Müller und Hannah Sättele 
  Quellen: Praktikum mit Markus, Inverted Classroom, W3Schools
  Youtube Video https://www.youtube.com/watch?v=OsFwOzr3_sE
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
    cow = new Animal("cow", "Paula", "wheat", 10, "muuuh");
    chicken = new Animal("chicken", "Darcy", "seeds", 5, "gack");
    dog = new Animal("dog", "Peanut", "treats", 1, "woof");
    donkey = new Animal("donkey", "Elisabeth", "grass", 50, "iaia");
    pig = new Animal("pig", "Peppa", "grains", 20, "oink");
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
      displayOutput.innerHTML += animals[index].output();
      displayOutput.innerHTML += stock[index].showAmount();

      output.appendChild(displayOutput);
    }
  }
}
