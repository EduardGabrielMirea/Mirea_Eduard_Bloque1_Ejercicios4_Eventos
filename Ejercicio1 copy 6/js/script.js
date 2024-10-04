document.addEventListener("DOMContentLoaded",function () {
    
    //Funciones externas usando this. Ej1
    var textoParrafoEj1 = document.querySelector("#ejercicio1 p");
       
    function aumentarTamano() {
        this.style.fontSize = "16pt";
    }
  
    function restaurarTamano() {
        this.style.fontSize = "12pt";
    }
  
    textoParrafoEj1.onmouseover = aumentarTamano;
    textoParrafoEj1.onmouseout = restaurarTamano;

    //Estructura semántica. Ej2
    var textoParrafoEj2 = document.querySelector("#ejercicio2 p");
   
    textoParrafoEj2.addEventListener("mouseover",function () {
        textoParrafoEj2.style.fontSize = "16pt";
    });
   
    textoParrafoEj2.addEventListener("mouseout",function () {
        textoParrafoEj2.style.fontSize = "12pt";
        
    });

    // Función que cambia el tamaño del texto en función del tipo de evento. Ej3
    var textoParrafoEj3 = document.querySelector("#ejercicio3 p");
    
    function cambiarTamano(event) {
        if (event.type === "mouseover") {
            event.target.style.fontSize = "16pt";
        } else if(event.type === "mouseout"){
            event.target.style.fontSize = "12pt";
        }
    }

    textoParrafoEj3.onmouseover = cambiarTamano;
    textoParrafoEj3.onmouseout = cambiarTamano;

    // AttachEvent y con addEventListener. Ej4
    var textoParrafoEj4 = document.querySelector("#ejercicio4 p");
    
    function colorVerde() {
        this.style.color = "green";
    }
    function colorNegro() {
        this.style.color = "black";
    }

   function cambiarColor() {
    if (textoParrafoEj4.addEventListener) {
        //False es el default, bubbling y lee desde el elemento más hijo hacia el elemento mas padre.
        textoParrafoEj4.addEventListener("mouseover", colorVerde,false);
        textoParrafoEj4.addEventListener("mouseout", colorNegro,false);
    } else if(textoParrafoEj4.attachEvent) {
        textoParrafoEj4.attachEvent("onmouseover",function () {colorVerde.call(textoParrafoEj4);});
        textoParrafoEj4.attachEvent("onmouseout",function(){colorNegro.call(textoParrafoEj4);});
    }
   }
   cambiarColor();

   //Formulario. Ej5 https://www.freecodecamp.org/espanol/news/lista-de-codigos-de-teclas-en-javascript/

   var inputFormulario = document.querySelector("#numeros");
   inputFormulario.addEventListener("keydown",function (event) {

    var teclasPermitidas = ["Backspace"];
        if (!(event.key >= '0' &&  event.key <= '9') && !teclasPermitidas.includes(event.key)) {
            // que solo se puedan introducir numeros
            event.preventDefault();
            alert("Solo se pueden introducir y borrar números");
        }
   });
});