var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log(_event);
        var div0 = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);
        var div1 = document.createElement("div");
        div1.classList.add("div1");
        document.body.appendChild(div1);
        //MouseMove Listener
        document.addEventListener("mousemove", setInfoBox);
        //click-Listener
        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        //document.querySelector(".div0").addEventListener("click", logInfo);
        //keyup-Listener
        document.querySelector(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var span = document.createElement("span");
        span.classList.add("span");
        document.body.appendChild(span);
        var x = _event.clientX; //clientX vorbelegte Funktion  
        var y = _event.clientY;
        document.appendChild(span);
        span.appendChild(x);
        console.log(_event); //MouseEvent 
    }
    function logInfo(_event) {
        console.log(_event);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=EventInspector.js.map