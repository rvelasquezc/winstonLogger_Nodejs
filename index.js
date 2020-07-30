const axios = require("axios");
const winston = require("winston");
const logger = require("./src/utils/logger");
const log = require("./src/utils/log");
const http = require("http");
//const json = require("./data.json");
const host = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {

  if (req.url === "/nombre") {
    logger.info(req.url + " Usuario autenticado");
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Bien venido usuario");
    //--------------------------------------------
    const getNombre = async () => {
      return await axios({
        url:"https://jsonplaceholder.typicode.com/todos/1",
      });
    }; 
  
    (async () => {
      const info = await getNombre();
      logger.info(JSON.stringify(info.data));
      console.log(info.data);
    })(); 
  } else if (req.url === "/vendedor") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Nombre de vendedor");
    logger.info(req.url + " Informacion de Vendedor");
    //---------------------------------------------------
    const getVendedor = async () => {
      return await axios({
        url:
          "https://jsonplaceholder.typicode.com/todos/2",
      });
    };
  
    (async () => {
      const info = await getVendedor();
      logger.info(JSON.stringify(info.data));
      console.log(info.data);
    })(); 
  } else if (req.url === "/supervisor") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Nombre supervisor");
    logger.info(req.url + " Informacion de supervisor");

    const getSupervisor = async () => {
      return await axios({
        url:
          "https://jsonplaceholder.typicode.com/todos/3",
      });
    };
  
    (async () => {
      const info = await getSupervisor();
      logger.info(JSON.stringify(info.data));
      console.log(info.data);
    })();
  } else if (req.url === "/diasventa") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Dias de venta de vendedor");
    logger.info(req.url + " Dias en que pasa vendedor");

    const getDiasVend = async () => {
      return await axios({
        url:
          "https://jsonplaceholder.typicode.com/todos/4",
      });
    };
  
    (async () => {
      const info = await getDiasVend();
      logger.info(JSON.stringify(info.data));
      console.log(info.data);
    })();
  } else if (req.url === "/error") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Error 404 pinto un error");
    logger.info(req.url + " Consulto recurso no existente");
  } else {
    res.statusCode = 400;
    res.setHeader("Content-type", "text/plain");
    res.end("Contenido no existe");
    logger.info(req.url + " Ingreso ruta que no existe");
  }
});

server.listen(port, host, () => {
  logger.info(`Servidor ejecutando en http://${host}:${port}/`);
});
