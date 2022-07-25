# TELOrganizo
 repositorio proyecto diseño de apps web y moviles

## Para ejecutar FRONTEND, entrar a carpeta frontend y ejecutar:

### npm install
### npx react-native run-android


## Para ejecutar BACKEND, entrar a carpeta backend y ejecutar:

### npm install
### npm run dev


#### Para conectar la base de datos agregar localmente un archivo ".env" en la carpeta backend en el cual iran las credenciales de la base de datos, este archivo no estará presente en git debido a que será parte del ".gitignore" por cosas de seguridad, el archivo ".env" debiese ser de la siguiente forma como ejemplo: 

-> DB_USER = postgres
-> DB_PASSWORD = contrasena1234
-> DB_HOST = localhost
-> DB_PORT = 5432
-> DB_DATABASE = proyectoTEL335

_________________________________________________

## Información ramas de desarrollo:

En la rama main se encuentra la pantalla principal para visualizar tareas y botones para crearlas. Lo que se presentó en la clase.
En la rama rama-login se encuentra el login que al clickear el boton muestra la aplicacion pero sin sacar el formulario de registro