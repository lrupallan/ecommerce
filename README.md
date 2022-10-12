# Ecommerce Centro de donaciones - Curso React

La aplicación consiste en un 'ecommerce' destinado a conseguir donaciones para costear los gastos veterinarios o de alimentación de animales en situación de calle que fueron rescatados por alguna persona. Las donaciones se hacen en forma de módulos con distintos precios y tienen un límite o stock que correspondería a la deuda total en la veterinaria o una cantidad objetivo que se desee recaudar.

![](public/Screenshot%20(139).png)
En el detalle de cada animal puede verse una breve descripción y se puede elegir la cantidad a donar a traves de un contador que tiene como máximo el stock disponible de módulos para cada perro o gato.

![](public/Screenshot%20(142).png)
Al tocar el boton 'Agregar al carrito' este nos llevara a nuestro carrito donde podremos ver el detalle de nuestra 'compra' (cantidad total de modulos y precio total).
![](public/Screenshot%20(144).png)
Una vez en el carrito podremos ver los siguientes botones:

- Eliminar donacion: Para borrar de manera individual los 'articulos' de nuestro carrito.
- Limpiar carrito: Elimina todos los módulos previamente agregados.
- Seguir mirando: Nos lleva nuevamente a la página de inicio.
- Finalizar donación: Nos lleva al check-out.

## Librerias utilizadas

-    [React Router Dom](https://reactrouter.com/en/main) Libreria para manejar las rutas de la aplicacion.

- [Firebase](https://firebase.google.com/?hl=es-419&gclid=CjwKCAjwqJSaBhBUEiwAg5W9p2l9iM-iIXvGkQdWsd3F783hvo8WHsRIDyq28uvpjQXhHZNZcDG8bBoCW-wQAvD_BwE&gclsrc=aw.ds) Libreria utilizada para almacenar los distintos productos, categorias y ordenes de compra generadas desde la aplicacion.
-    [React Spinners](https://www.davidhu.io/react-spinners/) Libreria utilizada para simular un retardo de red en la carga de los productos.

-  [React Icons](https://www.npmjs.com/package/react-icons) Utilizada para el icono del carrito de compras (CartWidget).

### Pasos para levantar el proyecto de manera local

```
git clone https://github.com/lrupallan/ecommerce 
```

```
npm install
```

```
npm start
```

