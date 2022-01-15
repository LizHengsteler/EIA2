namespace Übung11 {
    
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        createSuper();
        console.log("Main");

        
    }

    function createSuper(): void {
        //let super: Superclass = new Superclass;
        let sub: Subclass = new Subclass;
        sub.doSomething();
        
    }
}