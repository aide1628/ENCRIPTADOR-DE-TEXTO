//---selección de todos los elementos----//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const txtDesencriptar = document.querySelector(".desencriptar");

//---botón de encriptar---//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == "") {
        aviso.style.background = "#7e8792";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } 
    else if (texto !== txt) {
        aviso.style.background = "#7e8792";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
     else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#7e8792";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ir solo en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } 
    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});


//---botón de Desencriptar---//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == "") {
        aviso.style.background = "#7e8792";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    } 
    else if (texto !== txt) {
        aviso.style.background = "#7e8792";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
     else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#7e8792";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ir solo en minúsculas";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } 
    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

//---botón de Copiar---//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");

})