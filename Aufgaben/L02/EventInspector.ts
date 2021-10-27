namespace L02_Load {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log(_event);
        //document.addEventListener("mousemove", )

        let div0: HTMLElement = document.createElement("div");
        div0.classList.add("div0");
        document.body.appendChild(div0);


        let div1: HTMLElement = document.createElement("div");
        div1.classList.add("div1");
        document.body.appendChild(div1);

        let span: HTMLElement =document.createElement("span");
        span.classList.add("span");
        document.body.appendChild(span);
       

        
  }


    }


   
