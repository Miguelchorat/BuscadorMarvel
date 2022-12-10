# Hoja de estilo alternativa

La hoja de estilo alternativa es que un html tenga varios estilos de css para que el usuario pueda elegir cual usar. El enlace que tenga un título significara que son los estilos alternativos de css. En caso de que los tres enlaces de CSS tuvieran título el primer enlace sería el predeterminado y el resto los alternativos.

Ejemplo:
   
    <link rel="stylesheet" href="assets/sass/main.sass">
    <link rel="stylesheet" href="assets/sass/main.sass" title="estilo-2">
    <link rel="stylesheet" href="assets/sass/main.sass" title="estilo-3">
   

# Hoja de estilos directa o externa

Hay 3 formas de dar estilos a nuestro CSS.

   - Inline
   - Externo
   - Interno

## Inline

Se usa para dar directamente a un elemento especifico del html un estilo en su etiqueta.

Ejemplo: 

    <p style="color:white;">Texto</p>

## Interno

Se usa para dar directamente estilos al html desde el propio archivo html en la sección de head.

Ejemplo:

    <style type="text/css">

        body {
         background-color: black;
        }

    </style>

## Externo

Enlazas tu archivo html con un archivo css externo.

Ejemplo:

    <link rel="stylesheet" href="assets/sass/main.sass">

## ¿Cuál usar y por qué?

El que se debé usar por buenas prácticas es el css externo.

Usar el inline o el interno provoca desorganización en tus estilos al solo aplicar sus css a sus html correspondientes. Y puede crear problemas de especificidad.

Tenerlo todo en un archivo externo hará que todos los archivos html de tu documento compartan el mismo CSS y tendrás todo organizado en un mismo sitio.
