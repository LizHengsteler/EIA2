namespace L02_Load {
    window.addEventListener("load", handleLoad);
    /*let span: HTMLElement = document.createElement("span");
    span.classList.add("span");*/

    let span: HTMLElement = document.querySelector(".span");
    
    function handleLoad(_event: Event): void {
      let div0: HTMLElement = document.createElement("div");
      div0.classList.add("div0");
      document.body.appendChild(div0);
      let div1: HTMLElement = document.createElement("div");
      div1.classList.add("div1");
      document.body.appendChild(div1);
     
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
     
  }
    function setInfoBox(_event: MouseEvent): void {

      let x: number = _event.clientX;
      let y: number = _event.clientY; 
     
      //let target: EventTarget = _event.target;
      
      span.style.left = x + "px";
      span.style.top = y + "px";
      span.innerHTML = "x position:" + x + "y position" + y;
      
    
}

    function logInfo (_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);

  }

    }


   
