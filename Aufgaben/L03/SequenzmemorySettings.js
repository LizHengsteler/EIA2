"use strict";
//Zusammenarbeit mit Theo
var SequenzmemorySettings;
(function (SequenzmemorySettings) {
    window.addEventListener("load", startGame);
    let input;
    input = document.querySelector("#inputField");
    let sequenceArray = input.value.split("");
    let counter = 0;
    function startGame() {
        for (let index = 0; index < sequenceArray.length; index++) {
            let shuffleNumber = Math.floor(Math.random() * (sequenceArray.length));
            console.log(shuffleNumber);
            let createSpan = document.createElement("span");
        }
    }
})(SequenzmemorySettings || (SequenzmemorySettings = {}));
//# sourceMappingURL=SequenzmemorySettings.js.map