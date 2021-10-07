//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const vjRoutes = require('./routes/videojuegos')
const cRoutes = require('./routes/consolas')
const vcRoutes = require('./routes/consolaVideojuegos')
const sequelize = require('./utils/database')
//Creación de la aplicación web
const app = express();

//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/videojuegos",vjRoutes);
app.use("/consolas",cRoutes);
app.use("/vc",vcRoutes);

app.get("/prueba",(req,res)=>{
    res.send("Prueba del servidor funcionando")
})

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
        })        
    })
    .catch(err=>console.log(err))