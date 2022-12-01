let encabezado_menu = document.querySelector(".encabezado__menu");
let desplegable_cerrar = document.querySelectorAll(".desplegable__header__icono")[1];
let desplegable_atras = document.querySelectorAll(".desplegable__header__icono")[0];
let fondo_desplegable = document.querySelector(".fondo__desplegable");
let desplegable = document.querySelector(".desplegable");
let desplegable_inicio = document.querySelector(".desplegable__inicio");
let desplegable_iniciar = document.querySelector(".desplegable__iniciar");
let desplegable_registrar = document.querySelector(".desplegable__registrar");
let desplegable_contacto = document.querySelector(".desplegable__contacto");
let btnIniciarSesion_inicio = document.querySelectorAll(".desplegable__inicio__usuario__sesion__identificacion__enlace")[0];
let btnIniciarSesion_registrar = document.querySelectorAll(".desplegable__registrar__boton")[1];
let btnRegistrarse_inicio = document.querySelectorAll(".desplegable__inicio__usuario__sesion__identificacion__enlace")[1];
let btnRegistrarse_iniciar = document.querySelectorAll(".desplegable__iniciar__boton")[1];
let btnContacto = document.querySelectorAll(".desplegable__inicio__lista__item__enlace")[1];
function reiniciarDesplegable() {
    desplegable_atras.style.visibility = "hidden";
    desplegable_inicio.style.setProperty("display", "flex");
    desplegable_registrar.style.setProperty("display", "none");
    desplegable_iniciar.style.setProperty("display", "none");
    desplegable_contacto.style.setProperty("display", "none");
}
function abrirMenu() {
    desplegable.style.setProperty("display", "flex");
    desplegable_atras.style.visibility = "hidden";
    fondo_desplegable.style.setProperty("display", "block");
    window.setTimeout(function() {
        desplegable.style.right = 0;
    }, 50);
    reiniciarDesplegable();
}
function cerrarMenu() {
    desplegable.style.right = "-20vw";
    fondo_desplegable.style.setProperty("display", "none");
    window.setTimeout(function() {
        desplegable.style.setProperty("display", "none");
    }, 600);
}
function cambiarIniciarSesion() {
    desplegable_atras.style.visibility = "visible";
    desplegable_inicio.style.setProperty("display", "none");
    desplegable_registrar.style.setProperty("display", "none");
    desplegable_iniciar.style.setProperty("display", "flex");
}
function cambiarRegistrarse() {
    desplegable_atras.style.visibility = "visible";
    desplegable_inicio.style.setProperty("display", "none");
    desplegable_registrar.style.setProperty("display", "flex");
    desplegable_iniciar.style.setProperty("display", "none");
}
function cambiarContacto() {
    desplegable_atras.style.visibility = "visible";
    desplegable_inicio.style.setProperty("display", "none");
    desplegable_registrar.style.setProperty("display", "none");
    desplegable_iniciar.style.setProperty("display", "none");
    desplegable_contacto.style.setProperty("display", "flex");
}
encabezado_menu.addEventListener("click", abrirMenu);
desplegable_cerrar.addEventListener("click", cerrarMenu);
fondo_desplegable.addEventListener("click", cerrarMenu);
btnIniciarSesion_inicio.addEventListener("click", cambiarIniciarSesion);
btnIniciarSesion_registrar.addEventListener("click", cambiarIniciarSesion);
btnRegistrarse_inicio.addEventListener("click", cambiarRegistrarse);
btnRegistrarse_iniciar.addEventListener("click", cambiarRegistrarse);
btnContacto.addEventListener("click", cambiarContacto);
desplegable_atras.addEventListener("click", reiniciarDesplegable);

//# sourceMappingURL=informacion.1e4a0065.js.map
