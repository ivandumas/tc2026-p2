//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
const vjRoutes = require('./routes/videojuegos')
const sequelize = require('./utils/database')
//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//Renderizar archivos html como ejs
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs')

app.use("/videojuegos",vjRoutes);
// //Atender una petición del recurso mipagina
// app.get('/mipagina',(request,response)=>{
//     response.sendFile(path.join(__dirname,'views','index.html'))
// })

// app.get('/recurso2',(request,response)=>{
//     response.sendFile(path.join(__dirname,'views','ejercicio.html'))
// })

// app.get('/recurso3',function (req,res){
//     res.send('<html><body><p title="prueba"> Nuevo Recurso</p></body></html>')
// })

// app.get('/formulario',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','formulario.html'))
// })

// app.get('/informacion/:identificador/:nombre',(req,res)=>{
//     res.send("<h1>Recibiendo datos</h1>")
//     console.log(req.query) //URL
//     console.log(req.params) //URL
//     //Valor concatenado
//     console.log("Password:" +req.query.password)
//     //Valor integrado
//     console.log(`Marca: ${req.query.marca}`)
//     console.log(req.params.identificador)
// })

// app.post('/enviarInfo',(req,res)=>{
//     res.send("Informacion recibida")
//     console.log(req.body)
// })

// app.get('/plantillaEJS',(req,res)=>{
//     const data=[
//         {usuario:'Susana',password:'123456'},
//         {usuario:'Pedro',password:'654321'},
//         {usuario:'Laura',password:"#%#%$"},
//         {usuario:'Marco',password:"ergre"}
//     ]
//     res.render('ejemploPlantilla.html',{
//         personas:data,
//         nombre:"Carla",
//         edad: 19
//     })
// })

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