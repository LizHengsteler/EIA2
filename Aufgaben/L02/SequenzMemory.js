var SequenzMemory;
(function (SequenzMemory) {
    window.addEventListener("load", handleLoad);
    var createPrompt = prompt("Enter your memory word here!");
    var inputPrompt = createPrompt;
    //let splittedArray: string [] = [""];
    var splittedArray = inputPrompt.split("");
    function handleLoad(_event) {
        mixCards();
    }
    function mixCards() {
        for (var index = 0; index < createPrompt.length; index++) {
            var randomNumber = Math.floor(Math.random() * (splittedArray.length));
            var createDiv = document.createElement("div");
            createDiv.classList.add("card" + randomNumber);
            document.body.appendChild(createDiv);
            createDiv.innerHTML = splittedArray[randomNumber];
            splittedArray.splice(randomNumber, 1);
            //console.log(splittedArray);
            //console.log(randomNumber);
        }
        setTimeout(function () {
            startGame();
        }, 100);
    }
    function startGame() {
        createDiv.addEventListener("click", logInfo);
        console.log("hello");
    }
})(SequenzMemory || (SequenzMemory = {}));
//# sourceMappingURL=SequenzMemory.js.map