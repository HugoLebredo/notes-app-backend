# Arquitectura MERN

<img src="https://miro.medium.com/max/4800/1*u8xh3we2xdp9piDGFpaHSg.png">

En el desarrollo web existen diferentes tecnologías que permiten crear páginas de manera interactiva. Todos conocemos HTML, CSS, JavaScript, jQuery, PHP, asp.net, python o java. Pero en el desarrollo de aplicaciones full-stack (fusión de un frontend y todas las cosas que hace un backend) Javascript juega un papel importantisimo.

Es muy común utilizar una **single-page applications** , es decir una pagina web capaz de interactuar de manera dinámica con el usuario y que solo renderize la página actual con los datos pedidos. De esta renderización se encargarán React, Angular o Vue. Según la biblioteca utilizada estaremos creando una aquitectura MERN, MEAN o MEVN. La gestión de las peticiones las realizarán el resto de tecnologías Mongo, Node y Express.

Con todo esto ya sabemos a que corresponden las siglas de MERN

* **MongoDB** — Base de datos de documentos.
* **Express.js** — Node.js web framework (back-end).
* **React.js** — Un framework de Javascript desde el punto de vista del cliente (front-end).
* **Node.js** — El servidor web de JavaScript (entorno de ejecución).

Las operaciones esenciales utilizadas en ete tipo de aplicaciones son las denominadas CRUD (Create, Read, Update, Delete). Esto facilida a la arquitectura MVC (Model-View-Controller) que trabaje de forma elegante.

Let’s split the full stack as front-end and back-end application.

## Node.js

Node.js es un entorno de ejecución de JavaScript. Es la pidra angular sobre la que gira todo el back-end. Sobre este entorno ejecutaremos Express.js y el resto de dependencias.

## Express.js

Si Node.js es simplemente un entorno de ejecución ¿Como se comunica el cliente con el servidor? ¿Como gestiona el servidor una petición (request) y envía respuestas? Ese es el trabajo de Express.js

Es un framework que corre sobre Node.js que provee un conjunto de librerias para apliaciones web.

Por ejemplo. Si un cliente necesitara almacenar algún dato en una base de datos, entonces el cliente enviaría una petición con los parámetros apropiados al servidor. Esos parámetros serán evaluados por Express.js antes de enviarlos a la base de datos.

Para poder hacer esto es necesario crear dentro de Express.js 2 figuras ROUTES y CONTROLLERS

### Router

El Router recogerá la petición (request) que venga de React.js y la enviará al controlador que le corresponda para que la evalue. dentro de cada Router debe también inyectar los middelwares necesarios a la petición y comprobar si existe algún error

### Controller

Los controladores evaluarán y ejecutarán las peticiones dadas por el Router. Será el encargado de comunicar si se ha producido algún error en la comunicación con la base de datos o si todo ha ido bien.

## MongoDB - Base de datos

MongoDB es una base de datos No-SQL. Es decir es una base de datos no relacional lo que significa que almacena los datos en forma de documentos JSON. Esto quiere decir que se ajusta muy bien para guardar y gestionar información desestructurada.

¿Cómo nos vamos a comuncar con MongoDB? Gracias a un paquete llamado **mongoose**. Este nos permitita crear un modelo de datos, generar un esquema que será utilizado para darle una forma a los datos que enviemos a nuestra base de datos.
