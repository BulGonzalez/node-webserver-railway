require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public') );

//renderizar, no se usa la extencion .hbs en home porque ya se especifica
//Se envian los parametros para rnederizarlos en el home.hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Esvetlana',
        titulo: 'Curos de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Esvetlana',
        titulo: 'Curos de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Esvetlana',
        titulo: 'Curos de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port} `)
})


//******* NOTAS ANTERIORES ********


//Midelware, es una funcion que se ejecutaantes de hacer otra cosa
//servir contenido estatico
// app.use( express.static('public') );

// //Esto ya no se ejecuta porque con lo de arriba se define como la ruta de /, y como da una respuesta lo de abajo ya no se ejecuta
// // app.get('/', (req, res) => {
// //   res.send('Home page')
// // });

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo desde la ruta')
// });

// //Enviar algo que se encuentra en la ruta publica
// //La ruta tiene que ser absoluta
// app.get('/generic', (req, res) => {
//     res.sendFile( __dirname + '/public/generic.html') //Toda la ruta dinde este corriendo
// });

// //Si el usuario coloca elements sin el .html no truena la pagina y si lo redirecciona
// app.get('/elements', (req, res) => {
//     res.sendFile( __dirname + '/public/elements.html') //Toda la ruta dinde este corriendo
// });

// app.listen(port, () => {
//     console.log(`Escuchando en el puerto ${port} `)
// })