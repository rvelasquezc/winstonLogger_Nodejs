function info(text){
    console.log("INFO:",text);
    return text;
    
    }
    
    function error(text){
        console.log("Error: ", text);
        return text;
    }
    
    //Para exportar funciones
    module.exports = (info,error);