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
  let cow: Animal;
  let chicken: Animal;
  let dog: Animal;
  let donkey: Animal;
  let pig: Animal;

  let wheat: Stock;
  let seeds: Stock;
  let treat: Stock;
  let grass: Stock;
  let grains: Stock;
  let output: HTMLDivElement = <HTMLDivElement>(
    document.getElementById("output")
  );

  function handleLoad(_event: Event): void {
    console.log("handleLoad");
    cow = new Animal("cow", "Paula", "wheat", 10, "muuuh");
    chicken = new Animal("chicken", "Darcy", "seeds", 5, "gack");
    dog = new Animal("dog", "Peanut", "treat", 3, "woof");
    donkey = new Animal("donkey", "Elisabeth", "grass", 50, "iaia");
    pig = new Animal("pig", "Peppa", "grains", 20, "oink");
    animals.push(cow, chicken, dog, donkey, pig);

    wheat = new Stock("wheat", 300);
    seeds = new Stock("seeds", 300);
    treat = new Stock("treat", 300);
    grass = new Stock("grass", 300);
    grains = new Stock("grains", 300);
    stock.push(wheat, seeds, treat, grass, grains);

    console.log(animals[1].output());

    simulateDay();
    console.log(animals);
    console.log(stock);
  }

  function simulateDay(): void {
    for (let index: number = 0; index < animals.length; index++) {
      let displayOutput: HTMLSpanElement = <HTMLSpanElement>(
        document.createElement("span")
      );
      displayOutput.innerHTML += animals[index].output();

      output.appendChild(displayOutput);
    }
  }
}
