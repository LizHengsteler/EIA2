var BlackmailerCompanion;
(function (BlackmailerCompanion) {
    console.log("Start");
    var chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter); //mit F2 Namen verändern 
    }
    function placeLetter(_event) {
        //console.log(_event);
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target; //gleicher Variablenname, aber unabhängig voneinander, da lokal definiert
        var letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        //console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        var target = _event.target; //Variable angelegt, um nicht immer _event.target nutzen zu müssen
        var parent = target.parentNode;
        parent.removeChild(target);
    }
})(BlackmailerCompanion || (BlackmailerCompanion = {}));
//# sourceMappingURL=BlackmailerCompanion.js.map