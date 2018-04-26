# Evaluacion tecnica de backend 'Kuntur Digital'
### Objetivo:
El objetivo de esta prueba poder evaluar los conocimientos estándar y buenas prácticas en
el desarrollo API REST, al igual la calidad de software.

### Desarrollo del proyecto:
El proyecto fue desarrollado con Node.js, Express, MongoDB y Mongoose.

Como podemos ver tenemos el `app.js`
el cual es el archivo principal donde declaramos primero que nada nuestras dependencias tales como mongoose, express (el cual nos facilitara crear el servidor y realizar llamadas HTTP. Con http creamos el servidor que posteriormente escuchará en el puerto 3000 de nuestro ordenador), etc.

luego hacemos uso de los middlewares de express. Por ejemplo:
 Con bodyParser permitimos que pueda parsear JSON, methodOverride() nos permite implementar y personalizar métodos HTTP y asi.

 Podemos declarar las rutas con app.route(nombre) seguido de los verbos .get(), .post(), etc… y asi crear una instancia para ellas con express.Router().


Ademas en este archivo es donde establecemos nuestra conexion con MongoDB.

---

Seguidamente creamos `models/user.js` practicamente aca es donde establecemos un modelo a seguir para cada usuario.

---

los controladores de las rutas de nuestro API los vamos a crear en un archivo separado que llamaremos `controllers/users.js` . Gracias a exports podemos modularizarlo y que pueda ser llamado desde el archivo principal de la aplicación. De esta manera establecemos nuestro CRUD creando funciones usando:
```javascript
.find()
.findById()
.save()
```

En otras palabras cuando usamos GET simplemente este tiene una funcion que usando `.find()` se le pasa como parametro los usuarios para que luego lo renderize y se muestre como un JSON.

y lo mismo sucede con los demas.

En este proyecto me enfoque en los principales los cuales son GET, POST, PUT, DELETE.

---

### Test
Para comprobar que todo funciona correctamente.
se debe correr en la terminal:
```
npm install
node app.js
```

> Debemos tener encendida nuestra DB. Para ello abrimos otra terminal y en esta corremos mongod (asegurarse que este instalado). nuevamente en otra terminal nos conectamos corriendo mongo.


Luego con Postman (una herramienta para probar nuestras API's) realizamos peticiones HTTP como POST, PUT, DELETE, GET. A nuestra API corriendo en [localhost](http://localhost:3000/api/users).

De esta manera podemos observar el funcionamiento de nuestra API. Sin tener que construir el Frontend.
