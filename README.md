# winstonLogger_Nodejs
Uso de Winston Logger con node js

[Documentacion oficial](https://github.com/winstonjs/winston)

Este es un ejemplo basico de uso e integracion de loggs usando winston en nuestra aplicacion desarrollado con node js
Se ha usado express y axios para consultar recursos externos para probar la funcionalidad del logg
la url utilizada para prueba del axios se obtiene de esta url:[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)


# Editor utilizado Visual Studio code
 Crea en la raiz del disco C:/ una carpeta para alojar tus proyectos y dentro crea la carpeta de tu proyecto ejemplo
 C:/Node/test
 
 Desde la consola de visual studio code en el directorio C:\Node\test> npm init
 Esto generara el proyecto con los archivos necesarios para integrar las dependencias 


# Librerias y dependencias
 1.   "axios": "^0.19.2",
 2.   "express": "^4.17.1",
 3.   "winston": "^3.2.1",
 4.   "winston-daily-rotate-file": "^4.4.2"
 
 para instalar las dependecias ejecute: C:\Node\test> nmp install
 
 # Para probar funcionamiento
 Desde la terminal de visual studio code ejecute C:\Node\test> node index.js
 para ver el resultado abra un navegador en la direccion http://127.0.0.1:3000/ 
 
 Al ejecutar la aplicacion crea automaticamente en la raiz del proyecto una carpeta llamada runtime
 y crea un archivo con la extension .log
 
 prueba con las urls http://localhost:3000/nombre,  /vendedor, /supervisor, /diasventa
 para ver el resultado en consola y en el log del resultado obtenido
 
 
 
 
    
  



