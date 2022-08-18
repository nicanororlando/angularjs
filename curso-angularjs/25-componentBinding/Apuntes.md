# Transferencia de datos entre componentes.

En la arquitectura de componentes los datos se pasan por medio de propiedades en el HTML y para que funcione se tiene que realizar la declaración de los datos compartidos en el JS.
Las propiedades del HTML funcionan como modificadores de los componentes, enviando datos que pueden afectar al componente de diversas maneras.

# Tipos de bindings:

"=": esto sirve para entregar una referencia a un objeto. Por tanto cualquier cosa que se esté entregando se comparte entre componentes.

"@": esto sirve para entregar un valor. No existe binding de ningún tipo.

(Símbolo "menor qué"): esto sirve para bindear en una única dirección, o 1 way binding. El padre le transfiere al hijo un valor, pero aunque lo modifique el hijo el nuevo valor no viaja al padre. Sin embargo, si el padre lo cambia, sí se cambia en el hijo.

"&": esta última alternativa permite enviar un puntero a una función.
