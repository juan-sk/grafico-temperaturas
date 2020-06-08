var conn= require('../services/db');



//getTempsAnuales(number) => new promise => resultados del anno
//realiza una consulta a la base de datos que devuelve los datos anuales
exports.getTempsAnuales= async function(anno){
    let sql = "select * from clima_media_temp_anno where anno=?"
    return await new Promise((resolve,reject)=>{

        //conn.query(query, valores para la querty en [], callback)
        conn.query(sql,[anno],(err,results)=>{
            if(err){
                reject(err)
            }
            resolve(results)
        })
    })
}


//getAllTemps(void)=> new Promise()=> array
//devuelve la informacion ordenada de las temperaturas de la vase de datos
exports.getAllTemps = async function(){

    let annosDisponibles=await this.getAnnosDisponibles();
    
    return await Promise.all(annosDisponibles.map(anno=> this.getTempsAnuales(anno.anno)));
}

//getAnnosDisponibles(void)=> await new promise => db resultset
//realiza una consulta a la base de datos
// que trae la informacion de todos los años sin duplicados
exports.getAnnosDisponibles= async function(){
    let sql ="select distinct(anno) as 'anno' from clima_media_temp_anno "
    return await new Promise((resolve,reject)=>{
        conn.query(sql, (err, result) => {
            if (err) {
                console.log("query error=>", err);
                reject(err)
            }
            resolve(result);
        })
       
    })
}
