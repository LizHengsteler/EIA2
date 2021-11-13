//Zusammenarbeit mit Theo
namespace SequenzmemorySettings {
  window.addEventListener("load", handleLoad);

  let startButton: HTMLButtonElement;
  let nodeList: NodeListOf<HTMLInputElement>;
  let sequenceArray: string[];
  let counter: number = 0;
  let frame: HTMLDivElement;
  let slider: HTMLInputElement;
  let backgroundColor: HTMLInputElement;
  let cardColor: HTMLInputElement;
  let fontColor: HTMLInputElement;
  let input: HTMLInputElement;
  let stepperTime: HTMLInputElement;

  

  //let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
  //console.log(formData);

  function handleLoad(_event: Event): void {
    
    input = <HTMLInputElement>document.querySelector("#codeWord");
    frame = <HTMLDivElement>document.querySelector("#formFrame");
    
    //let slider: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("input#size");
    startButton = <HTMLButtonElement>document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
    frame.addEventListener("change", handleChange);
    
    //handleChange(_event);
  
  }
  //console.log(startGame);

  

  function handleChange(_event: Event): void {
    /*let inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("input");
    console.log(inputs);
    let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
    console.log(font.value);*/
    let formData: FormData = new FormData(document.forms[0]);
    //console.log(formData);
    for (let entry of formData) {
      console.log(entry);
    }
  }
  

  function startGame(): void {
    frame = <HTMLDivElement>document.getElementById("formFrame");
    frame.classList.add("hidden");
    sequenceArray = input.value.split("");

    for (let index: number = 0; index <= sequenceArray.length; index++) {
      let shuffleNumber: number = Math.floor(
        Math.random() * sequenceArray.length
      );
      console.log(shuffleNumber);
      let createSpan: HTMLSpanElement = document.createElement("span");
      createSpan.innerHTML = sequenceArray[shuffleNumber];
      sequenceArray.splice(shuffleNumber, 1);
      console.log(sequenceArray);
    }
    setTimeout(function (): void {
      hideCards();
    },         2000 );

  }

  function hideCards(): void {
    console.log("Hello");

    
  }
}

