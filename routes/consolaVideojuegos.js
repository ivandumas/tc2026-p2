const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vcController = require('../controllers/consolaVideojuegos')

//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarVC',vcController.postAgregarVC)
//Consulta de consolasVideojuegos READ
router.get('/obtenerVCs',vcController.getObtenerVCs)
//Eliminar consolaVideojuegos DELETE
router.post('/borrarVC',vcController.postBorrarVC)
//Actualizar consolaVideojuegos UPDATE
router.post('/actualizarVC',vcController.postActualizarVC)

module.exports = router