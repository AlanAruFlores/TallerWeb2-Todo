# Manual de Uso de la Aplicación Backend

## Pasos ejecutar la aplicación

### 1. Versión de Node.js y NPM
````
Node.js: v12.22.12
NPM: v6.14.16
MySQL: v8.2.0
````
Estas versiones son necesarias para la ejecución de esta aplicación. Verifica que tu sistema tenga instaladas las versiones mencionadas para evitar problemas de compatibilidad.

### 2. Ejecución de Scripts
Se debe ejecutar el Script que se encuentra en la carpeta script, para la creacion de la base de datos.

### 3. Configuración de datos de la Base de Datos y puerto de la aplicación
La configuración de los datos de la base de datos se encuentra en el archivo .env. Asegúrate de definir las variables de entorno correctas en este archivo, tales como:

````
DB_HOST=localhost
DB_USER=***
DB_PASSWORD=***
DB_NAME=db_tareas
DB_PORT_BACK=3000
````
Este archivo permite definir las credenciales y configuraciones específicas para conectarse a la base de datos.

### 4. Instalación de Dependencias
Para instalar las dependencias del proyecto, abre una terminal, navega a la carpeta backend y ejecuta el siguiente comando:
````bash
npm install
````
Este comando descargará e instalará todas las dependencias definidas en el archivo package.json, necesarias para que la aplicación funcione correctamente.

**Nota: Si existe un error, eliminar el archivo package-lock.json y ejecutar nuevamente el comando.**
### 5. Levantar el Servidor
Para iniciar el servidor, en la carpeta raíz del backend, ejecuta el siguiente comando:
````bash
node server.js
````
Esto levantará el servidor de la aplicación en el puerto especificado en la configuración.

### 6. Acceso al Servidor
Una vez iniciado el servidor, podrás acceder al backend a través de la siguiente dirección:

http://localhost:3000/api/tarea
Este enlace es el punto de entrada al backend de la aplicación para interactuar con la API a través de peticiones HTTP.