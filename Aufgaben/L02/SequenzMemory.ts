namespace SequenzMemory {
    window.addEventListener("load", handleLoad);

    let createPrompt: string = prompt("Enter your memory word here!");
    let inputPrompt: string = createPrompt;
    //let splittedArray: string [] = [""];
    let splittedArray: string [] = inputPrompt.split("");

  
    function handleLoad(_event: Event): void {
  
    mixCards();
        
    }
    


    function mixCards(): void {

        for (let index: number = 0; index < createPrompt.length; index ++) {

        
        let randomNumber: number = Math.floor(Math.random() * (splittedArray.length));
        let createDiv: HTMLDivElement = document.createElement("div");
        createDiv.classList.add("card" + randomNumber);
        document.body.appendChild(createDiv);
        createDiv.innerHTML = splittedArray[randomNumber];
        splittedArray.splice(randomNumber, 1);

        //console.log(splittedArray);
        //console.log(randomNumber);
    }
        setTimeout(function (): void {
        startGame();
      },           100 );

        
    } 

    function startGame(): void {

        createDiv.addEventListener("click", logInfo);
        
        console.log("hello");
    }
    
}
