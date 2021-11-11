"use strict";
var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    let span; //globaler Zugriff
    let button;
    function handleLoad(_event) {
        let div0 = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);
        let div1 = document.createElement("div");
        div1.classList.add("div1");
        document.body.appendChild(div1);
        span = document.querySelector(".span");
        //console.log(_event);
        //MouseMove Listener
        document.addEventListener("mousemove", setInfoBox);
        //click-Listener
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("click", logInfo);
        //keyup-Listener
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        /*let button: HTMLElement = document.createElement("button");
        button.classList.add("button");
        div1.appendChild(button);*/
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let target = _event.target;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "Position von X: " + x + "px" + "<br>" + "Position von Y: " + y + "px" + "<br>" + target;
    }
    function logInfo(_event) {
        //console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        //console.log(_event);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=EventInspector.js.map