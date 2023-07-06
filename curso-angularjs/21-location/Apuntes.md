### Factory

# Uso:

1. Compartir datos entre controladores, permitiendo asi memorizar estados entre varias pantallas.
2. Compartir y empaquetar operaciones comunes a varios controladores. Crear funciones de estado global.

# Que son?

Son contenedores de codigo en los que podemos implementar librerias de funciones o almacenar datos.
Normalmente al usarla, nos devulve un dato, de cualquier tipo (lo mas comun es que nos devuelva un objeto para permitirnos acceder a sus atributos y metodos).
Las factorias se caracterizan por ser instanciadas una sola vez dentro de las aplicaciones, por lo que nos resultan utiles para almacenar datos en nuestra aplicacion que queramos usar a lo largo de varios controladores sin que se inicialicen de nuevo cuando se cambia la vista.
Los "services" en AngularJS incluyen tanto factorías como servicios.
