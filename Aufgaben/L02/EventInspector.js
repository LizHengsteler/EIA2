var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log(_event);
        //document.addEventListener("mousemove", )
        var div0 = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);
        var div1 = document.createElement("div");
        div1.classList.add("div1");
        document.body.appendChild(div1);
        var span = document.createElement("span");
        span.classList.add("span");
        document.body.appendChild(span);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=EventInspector.js.map