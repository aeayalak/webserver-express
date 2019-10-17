const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/json'});
    let salida = {
        nombre:'Adrian',
        apellido:'Ayala',
        edad:'42',
        sexo:'Masculino',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8082);

console.log('escuchando en el puerto 8082');