const path = require('path')
const Consolas = require('../utils/database').models.consola

exports.postAgregarConsola = (req, res)=>{
    console.log(req.body)
    Consolas.create(req.body)
    .then(result=>{
        console.log("Consola creado exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })    
}


exports.getObtenerConsolas = (req, res)=>{
    Consolas.findAll()
        .then(vjs=>{
            console.log(vjs)
            res.json(vjs)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.postBorrarConsola = (req, res)=>{
    console.log(req.body)
    Consolas.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Registro eliminado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}
exports.postActualizarConsola = (req, res)=>{
    console.log(req.body)
    
    Consolas.update({
        nombre: req.body.nombre
        
    },{
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Registro actualizado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}
