namespace L02_Load {
    window.addEventListener("load", handleLoad);
    let span: HTMLElement = document.createElement("span");
    span.classList.add("span");
    

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

    function setInfoBox (_event: MouseEvent): void {

      let span: HTMLElement = document.createElement("span");
      span.classList.add("span");
      document.body.appendChild(span);
      
      var x: number = _event.clientX;    //clientX vorbelegte Funktion  
      var y: number = _event.clientY; 
      //span.innerHTML = "position X = " + x + "px" + ", position Y = " + y + "px";
      let target: EventTarget = _event.target;
      //span.style.left = x + "px";
      //span.style.top = y + "px";
      span.innerHTML = "X: " + x + "px" + "<br>" + "Y: " + y + "px" + "<br>" + target ;
      
      console.log(_event); //MouseEvent 

  }
    function setInfoBox(_event: MouseEvent): void {
    
      let x: number = _event.offsetX;
      let y: number = _event.offsetY;
      let target: EventTarget = _event.target;
      span.style.left = x + "px";
      span.style.top = y + "px";
      span.innerHTML = "X: " + x + "px" + "<br>" + "Y: " + y + "px" + "<br>" + target ;
    
}

    function logInfo (_event: Event): void {
    console.log(_event.type)
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);

    
  }

    }


   
