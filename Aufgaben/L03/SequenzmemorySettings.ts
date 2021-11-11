//Zusammenarbeit mit Theo
namespace SequenzmemorySettings {
  let startButton: HTMLButtonElement;
  startButton = <HTMLButtonElement>document.querySelector("#startButton");
  startButton.addEventListener("click", startGame);

  let input: HTMLInputElement;
  input = <HTMLInputElement>document.querySelector("#inputField");
  let sequenceArray: string[] = input.value.split("");
  let counter: number = 0;

  function startGame(): void {
    for (let index: number = 0; index < sequenceArray.length; index++) {
      let shuffleNumber: number = Math.floor(
        Math.random() * sequenceArray.length
      );
      console.log(shuffleNumber);
      let createSpan: HTMLSpanElement = document.createElement("span");
      createSpan.innerHTML = sequenceArray[shuffleNumber];
      sequenceArray.splice(shuffleNumber, 1);
    }
  }
}
