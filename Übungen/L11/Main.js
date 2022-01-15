"use strict";
var Übung11;
(function (Übung11) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        createSuper();
        console.log("Main");
    }
    function createSuper() {
        //let super: Superclass = new Superclass;
        let sub = new Übung11.Subclass;
        sub.doSomething();
    }
})(Übung11 || (Übung11 = {}));
//# sourceMappingURL=Main.js.map