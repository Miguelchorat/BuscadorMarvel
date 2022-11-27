let encabezado_menu = document.querySelector(".encabezado__menu");
let desplegable_cerrar = document.querySelector(".desplegable__cerrar");
let fondo_desplegable = document.querySelector(".fondo__desplegable");
let desplegable = document.querySelector(".desplegable");

function abrirMenu(){
    desplegable.style.right = 0;
    //desplegable.style.setProperty('display', 'flex');
    fondo_desplegable.style.setProperty('display', 'block');
}

function cerrarMenu(){
    desplegable.style.right = "-20vw";
    //desplegable.style.setProperty('display', 'none');
    fondo_desplegable.style.setProperty('display', 'none');
}

encabezado_menu.addEventListener('click', abrirMenu);
desplegable_cerrar.addEventListener('click', cerrarMenu);
fondo_desplegable.addEventListener('click', cerrarMenu);

