const express = require('express');
const app = express();
const hbs = require('hbs');
// Exporto los helpers definidos en helper
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static( __dirname + '/public' ));
//dirname es el pathabsuluo o pathserver
//Directorio de las partials
hbs.registerPartials(__dirname + '/views/partials');
//Motor de HBS express
app.set('view engine', 'hbs');


//Esto es como el Route.Config de mvc
 app.get('/', function (req, res) {

     res.render('home',{
         nombre: 'Adrian Ayala',
         anio: new Date().getFullYear()
     });
    
 })


 app.get('/about', function (req, res) {
    res.render('about',{
        anio: new Date().getFullYear()
    });
})

app.listen(port, ()=>{
    console.log('Escuchando la peticion en el puerto '+ port);
});