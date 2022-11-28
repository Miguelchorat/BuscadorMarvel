let encabezado_menu = document.querySelector(".encabezado__menu");
let desplegable_cerrar = document.querySelector(".desplegable__cerrar");
let fondo_desplegable = document.querySelector(".fondo__desplegable");
let desplegable = document.querySelector(".desplegable");
let desplegable_inicio = document.querySelector(".desplegable__inicio");
let desplegable_iniciar = document.querySelector(".desplegable__iniciar");
let btnIniciarSesion = document.querySelector('.desplegable__inicio__usuario__sesion__identificacion__enlace');


function reiniciarDesplegable(){
    desplegable_inicio.style.setProperty('display','flex')
    desplegable_iniciar.style.setProperty('display','none')
}

function abrirMenu(){
    desplegable.style.setProperty('display', 'flex');
    fondo_desplegable.style.setProperty('display', 'block');
    window.setTimeout(function(){
        desplegable.style.right = 0;
    },50);
    reiniciarDesplegable()
}

function cerrarMenu(){
    desplegable.style.right = "-20vw";
    fondo_desplegable.style.setProperty('display', 'none');
    window.setTimeout(function(){
        desplegable.style.setProperty('display', 'none');
    },600);
}

function cambiarIniciarSesion(){
    desplegable_inicio.style.setProperty('display','none')
    desplegable_iniciar.style.setProperty('display','flex')
}

encabezado_menu.addEventListener('click', abrirMenu);
desplegable_cerrar.addEventListener('click', cerrarMenu);
fondo_desplegable.addEventListener('click', cerrarMenu);
btnIniciarSesion.addEventListener('click', cambiarIniciarSesion)

