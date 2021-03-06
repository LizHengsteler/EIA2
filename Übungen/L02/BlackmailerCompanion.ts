namespace BlackmailerCompanion {
    console.log("Start");
    let chosenCharacter: string = "A";
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter); //mit F2 Namen verändern 
    }

    function placeLetter (_event: MouseEvent): void {
       //console.log(_event);
       let x: number = _event.offsetX;
       let y: number = _event.offsetY; 

       let mail: HTMLElement = <HTMLElement>_event.target; //gleicher Variablenname, aber unabhängig voneinander, da lokal definiert
       let letter: HTMLSpanElement = document.createElement("span"); 
       mail.appendChild(letter);

       letter.textContent = chosenCharacter; 
       letter.style.left = x + "px";
       letter.style.top = y + "px";

       letter.addEventListener("click", deleteLetter);

    }

    function chooseCharacter (_event: KeyboardEvent): void {
        //console.log(_event);
        chosenCharacter = _event.key;
    }

    function deleteLetter (_event: MouseEvent): void {
        let target: Node = <Node>_event.target; //Variable angelegt, um nicht immer _event.target nutzen zu müssen
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);
    }

    
}