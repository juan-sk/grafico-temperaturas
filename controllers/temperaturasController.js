const temps = require('../services/temperaturasService')


//allTemps(req,res,next)
//este metodo retorna todos los valores de temperatura
exports.allTemps = async function (req, res, next) {

    let resultados = await temps.getAllTemps();
    //retorna http request con status 200 en formato json con los valroes =>resultado
    res.status(200).json(resultados);
    return;
}

//async temperaturasAnuales(req,res,next)
//returna las todas temperaturas anuales  
exports.temperaturasAnuales = async function (req, res, next) {

    let resultados = await temps.getTempsAnuales(2004)

    res.json(resultados)
}