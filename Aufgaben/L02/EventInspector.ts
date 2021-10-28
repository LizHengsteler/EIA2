namespace L02_Load {
    window.addEventListener("load", handleLoad);

  
    function handleLoad(_event: Event): void {

        console.log(_event);
        let div0: HTMLElement = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);


        let div1: HTMLElement = document.createElement("div");
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

    function setInfoBox (_event: MouseEvent): void {

      let span: HTMLElement = document.createElement("span");
      span.classList.add("span");
      document.body.appendChild(span);
      
      var x: Event = _event.clientX;    //clientX vorbelegte Funktion  
      var y: Event = _event.clientY; 
      document.appendChild(span);
      span.appendChild(x);
      
      
      console.log(_event); //MouseEvent 

    
  }

    function logInfo (_event: Event): void {
    console.log(_event);
    
  }


    }


   
