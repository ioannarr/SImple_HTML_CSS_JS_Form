


function validar(){
    
    let nombre  = document.getElementById("exampleName").value;
    let apellido = document.getElementById("exampleLastName").value;
    let email =  document.getElementById("exampleEmail").value;
    let password = document.getElementById("examplePassword").value;

    debugger

    if ((nombre || apellido || email || password) == "") {
    alert("Completar campos vacios");
    }

    else{
        let parrafo = document.createElement("p");
        let texto = document.createTextNode("Form submitted with success.");
        parrafo.appendChild(texto);

        let textoResultado = document.getElementById("resultado");
        textoResultado.appendChild(parrafo); 
        textoResultado.className ="verde"
    }        
}


    
   