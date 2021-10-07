const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const cController = require('../controllers/consolas')

//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarConsola',cController.postAgregarConsola)
//Consulta de consolas READ
router.get('/obtenerConsolas',cController.getObtenerConsolas)
//Eliminar consola DELETE
router.post('/borrarConsola',cController.postBorrarConsola)
//Actualizar consola UPDATE
router.post('/actualizarConsola',cController.postActualizarConsola)

module.exports = router