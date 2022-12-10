//Bandera que usaremos para saber si esta o no implementado el modo oscuro
let menuDesplegableFlag = false;
//Las variables del HTML que se accede a traves de su clase y seran modificables.
let encabezado_menu = document.querySelector(".encabezado__menu");
let desplegable_cerrar = document.querySelectorAll(".desplegable__header__icono")[1];
let desplegable_atras = document.querySelectorAll(".desplegable__header__icono")[0];
let fondo_desplegable = document.querySelector(".fondo__desplegable");
let desplegable = document.querySelector(".desplegable");
let popup = document.querySelector(".popup");
let desplegable_inicio = document.querySelector(".desplegable__inicio");
let desplegable_inicio_cerrada = document.querySelector(".desplegable__inicio__sesion__cerrada");
let desplegable_inicio_abierta = document.querySelector(".desplegable__inicio__sesion__abierta");
let desplegable_iniciar = document.querySelector(".desplegable__iniciar");
let desplegable_registrar = document.querySelector(".desplegable__registrar");
let desplegable_contacto = document.querySelector(".desplegable__contacto");
let desplegable_recuperar = document.querySelector(".desplegable__recuperar");
let principalError = document.querySelector(".principal--404");
let btnCerrarSesion = document.querySelector(".desplegable__inicio__lista__item__enlace--cerrar");
let btnCambiarImagen_icono = document.querySelector(".desplegable__inicio__sesion__img__icono");
let btnCambiarImagen_fondo = document.querySelector(".desplegable__inicio__sesion__img__fondo");
let aspectoDia = document.querySelectorAll(".desplegable__inicio__lista__item__oculto")[0];
let aspectoNoche = document.querySelectorAll(".desplegable__inicio__lista__item__oculto")[1];
let desplegableTemaOscuro = document.querySelector(".desplegable__inicio__lista__item__enlace__desplegable");
let textoAspectoTemaOscuro = document.querySelector(".desplegable__inicio__lista__item__enlace__icono__modo");
//Constantes que no se modificaran a lo largo del javascript. Tambien se accede al HTML mediantes sus clases con querySelector o querySelectorAll
const btnIniciarSesion_inicio = document.querySelectorAll(".desplegable__inicio__sesion__cerrada__identificacion__enlace")[0];
const btnIniciarSesion_registrar = document.querySelectorAll(".desplegable__registrar__boton")[1];
const btnRecuperar_iniciar = document.querySelector(".desplegable__iniciar__enlace");
const btnRegistrarse_inicio = document.querySelectorAll(".desplegable__inicio__sesion__cerrada__identificacion__enlace")[1];
const btnIniciarSesion = document.querySelectorAll(".desplegable__iniciar__boton")[0];
const btnRegistrarse_iniciar = document.querySelectorAll(".desplegable__iniciar__boton")[1];
const btnContacto = document.querySelectorAll(".desplegable__inicio__lista__item__enlace")[1];
const btnAbrirTemaOscuro = document.querySelectorAll(".desplegable__inicio__lista__item__enlace")[2];
const btnRecuperar = document.querySelector(".desplegable__recuperar__boton");
const btnModificar = document.querySelector(".principal__perfil__boton");
const btnCerrarModificar = document.querySelector(".popup__icono");
//Se encarga de reiniciar todos los datos de los display a none y dejar en flex el despliege inicial.
function reiniciarDesplegable() {
    desplegable_atras.style.visibility = "hidden";
    desplegable_inicio.style.setProperty("display", "flex");
    desplegable_registrar.style.setProperty("display", "none");
    desplegable_iniciar.style.setProperty("display", "none");
    desplegable_contacto.style.setProperty("display", "none");
    desplegable_recuperar.style.setProperty("display", "none");
    reiniciarDesplegableModoOscuro();
}
//Se encarga de desplazar el menu desplegable para la visualización del usuario. Activa el fondo para que el usuario sepa que no puede hacer nada una vez
//que el menu desplegable esta abierto.
function abrirMenu() {
    desplegable.style.setProperty("display", "flex");
    desplegable_atras.style.visibility = "hidden";
    fondo_desplegable.style.setProperty("display", "block");
    //Un delay al codigo para que el transitión del css se pueda cumplir
    window.setTimeout(function() {
        desplegable.style.transform = "translateX(0)";
    }, 50);
    reiniciarDesplegable() //Reinicia el desplegable en caso de que fuera cerrado en otro apartado que no fuera el inicial
    ;
}
// Se encarga de esconder el menu desplegable y cerrar el fondo auxiliar
function cerrarMenu() {
    desplegable.style.transform = "translateX(280px)";
    fondo_desplegable.style.setProperty("display", "none");
    if (popup != null) popup.style.setProperty("display", "none");
    //Un delay al codigo para que el transitión del css se pueda cumplir
    window.setTimeout(function() {
        desplegable.style.setProperty("display", "none");
    }, 600);
}
//Cambia los apartado del menu desplegable al de iniciar sesión
function cambiarIniciarSesion() {
    desplegable_atras.style.visibility = "visible";
    desplegable_inicio.style.setProperty("display", "none");
    desplegable_registrar.style.setProperty("display", "none");
    desplegable_iniciar.style.setProperty("display", "flex");
    desplegable_recuperar.style.setProperty("display", "none");
}
//Cambia los apartado del menu desplegable al de registrarse
function cambiarRegistrarse() {
    desplegable_atras.style.visibility = "visible";
    desplegable_inicio.style.setProperty("display", "none");
    desplegable_registrar.style.setProperty("display", "flex");
    desplegable_iniciar.style.setProperty("display", "none");
}
//Se encarga de mostrar la ventana emergente y el fondo auxiliar
function abrirPopup() {
    popup.style.setProperty("display", "flex");
    fondo_desplegable.style.setProperty("display", "flex");
}
//Se encarga de  la ventana emergente y el fondo auxiliar
function cerrarPopup() {
    popup.style.setProperty("display", "none");
    fondo_desplegable.style.setProperty("display", "none");
}
//Cambia los apartado del menu desplegable al de contacto
function cambiarContacto() {
    desplegable_atras.style.visibility = "visible";
    desplegable_inicio.style.setProperty("display", "none");
    desplegable_contacto.style.setProperty("display", "flex");
}
//Cambia los apartado del menu desplegable al de recuperar la cuenta
function cambiarRecuperar() {
    desplegable_iniciar.style.setProperty("display", "none");
    desplegable_recuperar.style.setProperty("display", "flex");
}
//Cambia el apartado de sesión cerrada a sesión iniciada. Muestra en el listado de opciones del apartado de inicio el botón para cerrar sesión
function iniciarSesion() {
    reiniciarDesplegable();
    desplegable_inicio_abierta.style.setProperty("display", "flex");
    desplegable_inicio_cerrada.style.setProperty("display", "none");
    btnCambiarImagen_icono.style.setProperty("display", "flex", "important"); //Necesario el important para sobreescribir la especificidad del icono de google
    btnCambiarImagen_fondo.style.setProperty("display", "flex");
    btnCerrarSesion.style.setProperty("display", "grid");
}
//Cambia el apartado de sesión iniciada a sesión cerrada. Desactiva el botón de cerrar sesión
function cerrarSesion() {
    desplegable_inicio_abierta.style.setProperty("display", "none");
    desplegable_inicio_cerrada.style.setProperty("display", "flex");
    btnCambiarImagen_icono.style.setProperty("display", "none", "important"); //Necesario el important para sobreescribir la especificidad del icono de google
    btnCambiarImagen_fondo.style.setProperty("display", "none");
    btnCerrarSesion.style.setProperty("display", "none");
}
//Se encarga de mostrar las distintas opciones ocultas del modo oscuro. Rota el icono de navegación para hacerlo mas intuitivo para el usuario
function desplegableModoOscuro() {
    if (!menuDesplegableFlag) {
        aspectoDia.style.setProperty("display", "flex");
        aspectoNoche.style.setProperty("display", "flex");
        desplegableTemaOscuro.style.transform = "rotate(90deg)";
        menuDesplegableFlag = true;
    } else reiniciarDesplegableModoOscuro();
}
//Remueve una clase al BODY para que sepa que tiene que mostrar los estilos del modo Día
function cambiarModoDia() {
    textoAspectoTemaOscuro.innerHTML = "D\xcdA";
    document.body.classList.remove("tema--oscuro");
    reiniciarDesplegableModoOscuro();
}
//Implementa una clase al BODY para que sepa que tiene que mostrar los estilos del modo Día
function cambiarModoNoche() {
    textoAspectoTemaOscuro.innerHTML = "NOCHE";
    document.body.classList.add("tema--oscuro");
    reiniciarDesplegableModoOscuro();
}
//Reinicia el desplegable del modo oscuro rotando el icono a su posición inicial y ocultando las diferentes opciones del modo oscuro.
function reiniciarDesplegableModoOscuro() {
    aspectoDia.style.setProperty("display", "none");
    aspectoNoche.style.setProperty("display", "none");
    desplegableTemaOscuro.style.transform = "rotate(0)";
    menuDesplegableFlag = false;
}
//Eventos de click de los diferentes botones para que llame a su función correspondiente al realizar en el dicho evento
encabezado_menu.addEventListener("click", abrirMenu);
desplegable_cerrar.addEventListener("click", cerrarMenu);
fondo_desplegable.addEventListener("click", cerrarMenu);
btnIniciarSesion.addEventListener("click", iniciarSesion);
btnIniciarSesion_inicio.addEventListener("click", cambiarIniciarSesion);
btnIniciarSesion_registrar.addEventListener("click", cambiarIniciarSesion);
btnRegistrarse_inicio.addEventListener("click", cambiarRegistrarse);
btnRegistrarse_iniciar.addEventListener("click", cambiarRegistrarse);
btnContacto.addEventListener("click", cambiarContacto);
btnRecuperar_iniciar.addEventListener("click", cambiarRecuperar);
desplegable_atras.addEventListener("click", reiniciarDesplegable);
btnAbrirTemaOscuro.addEventListener("click", desplegableModoOscuro);
aspectoDia.addEventListener("click", cambiarModoDia);
aspectoNoche.addEventListener("click", cambiarModoNoche);
if (btnModificar != null) {
    btnModificar.addEventListener("click", abrirPopup);
    btnCerrarModificar.addEventListener("click", cerrarPopup);
}
if (btnCerrarSesion != null) btnCerrarSesion.addEventListener("click", cerrarSesion);

//# sourceMappingURL=perfil.b4ce7916.js.map
