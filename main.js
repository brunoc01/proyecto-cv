var boton = document.getElementById("download");
var contador = 6;
var etiqueta = document.createElement("p");


var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
    this.style.display = "none";
    id = window.setInterval(function(){
        contador--;
        if(contador < 0){
            etiqueta.parentNode.replaceChild(boton, etiqueta);
            window.clearInterval(id);
        } else {
            etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar. </b>";
        }
    }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;

function myFunction() {
    document.getElementById("myForm").submit();
  }