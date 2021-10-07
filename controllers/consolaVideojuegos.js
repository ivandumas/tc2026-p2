const path = require('path')
const VC = require('../utils/database').models.consolaVideojuego

exports.postAgregarVC = (req, res)=>{
    console.log(req.body)
    VC.create(req.body)
    .then(result=>{
        console.log("VC creado exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })    
}


exports.getObtenerVCs = (req, res)=>{
    VC.findAll()
        .then(vjs=>{
            console.log(vjs)
            res.json(vjs)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.postBorrarVC = (req, res)=>{
    console.log(req.body)
    VC.destroy({
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
exports.postActualizarVC = (req, res)=>{
    console.log(req.body)
    
    VC.update({
        nombre: req.body.nombre,
        videojuegoId: req.body.videojuegoId,
        consolaId : req.body.consolaId
    },{
        where:{
            idCV:req.body.idCV
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
