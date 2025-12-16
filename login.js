function login() {
    const gmail = document.getElementById("b4").value .trim(); // el trim sirve para eliminar espacios en blanco
    const pass = document.getElementById("b6").value;

    const error = document.getElementById("b8");
    const boton = document.getElementById("b9");

    const gmailOk = "herdavid33@gmail.com";
    const passOk = "electromedicina"; 

    if (!gmail || !pass) {
        return; }

        if (gmail === gmailOk && pass === passOk) {
       
        error.style.visibility = "hidden";
        boton.style.left = "119px";
        boton.style.top = "165px"; 

        alert ("yendo del pupacho al living");
        // window.location.href = "portafolio.html";

    }       else { 

        error.style.visibility = "visible";

        boton.style.left = "119px";
        boton.style.top = "179px";

        setTimeout(() => {
            error.style.visibility = "hidden"; 
           
            boton.style.left = "119px";
            boton.style.top = "165px"; 
        
        }, 5000);
    }
}
