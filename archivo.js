var BotonEncriptar = document.querySelector (".bt-encriptar");
var BotonDesEncriptar = document.querySelector (".bt-Descriptar");
var Botoncopiar=document.querySelector(".bt-copiar");
var muneco = document.querySelector(".contenedor-muneco");                                      
var h3 = document.querySelector(".contenedor-h3");
var parrafo= document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var resultadocopia = document.querySelector(".texto-resultado");

BotonEncriptar.onclick = encriptar;
BotonDesEncriptar.onclick = desencriptar;
Botoncopiar.onclick=CopiaResult;


function encriptar(){
    ocultarObjetos();
     //resultado.textContent= RecuperaTexto();
     
     //alert(resultado.textContent= RecuperaTexto())
     resultado.textContent= encriptarTexto(RecuperaTexto());
     
    //alert(resultado.textContent= encriptarTexto(RecuperaTexto()))
  }

  function CopiaResult(){
      //      resultadocopia.textContent=resultado.textContent;
      // // salida=(resultadocopia.textContent.texto);
      // alert(salida);
      
      const btnCopiar = document.querySelector(".bt-copiar"); 
      btnCopiar.addEventListener("click", copiar = () => {
      var contenido = document.querySelector(".texto-resultado").textContent;
      navigator.clipboard.writeText(contenido);
      console.log("hola");
})

  }
  function desencriptar(){

    ocultarObjetos();
    var area = RecuperaTexto()
    resultado.textContent= desencriptarTexto(RecuperaTexto());

  }
 function RecuperaTexto(){
    var  area = document.querySelector(".area");
    return area.value;
 }

 function ocultarObjetos (){
    muneco.classList.add("ocultarmuneco");
    h3.classList.add("ocultarmuneco");
    parrafo.classList.add("ocultarmuneco");
 
 }

 
 function encriptarTexto(mensaje){
   var texto = mensaje;
   var textofinal="";
   
   for (var i=0; i< texto.length; i++ ){
         if (texto[i] =="a"){
            textofinal = textofinal + "ai"
            
         }
         
         else if (texto[i] =="e"){
            textofinal = textofinal + "enter"
         }

         else if (texto[i] =="i"){
            textofinal = textofinal + "imes"
         }
         else if (texto[i] =="o"){
            textofinal = textofinal + "ober"
         }

         else if (texto[i] =="u"){
            textofinal = textofinal + "ufat"
         }
         else{
            textofinal = textofinal + texto[i];
         }

   }
   
   return textofinal;
 }
 
 function desencriptarTexto(mensaje){
   var texto = mensaje;
   var textofinal="";
   
   for (var i=0; i< texto.length; i++ ){
         if (texto[i] =="a"){
            textofinal = textofinal + "a"
            i=i+1;
         }
         
         else if (texto[i] =="e"){
            textofinal = textofinal + "e"
            i=i+4;
         }

         else if (texto[i] =="i"){
            textofinal = textofinal + "i"
            i=i+3;
         }
         else if (texto[i] =="o"){
            textofinal = textofinal + "o"
            i=i+3;
         }

         else if (texto[i] =="u"){
            textofinal = textofinal + "u"
            i=i+3;
         }
         else{
            textofinal = textofinal + texto[i];
         }

   }
   
   return textofinal;
 }
 const btnCopiar = document.querySelector(".bt-copiar"); 
 btnCopiar.addEventListener("click", copiar = () => {
 var contenido = document.querySelector(".texto-resultado").textContent;
 navigator.clipboard.writeText(contenido);
 console.log("hola");
})
 