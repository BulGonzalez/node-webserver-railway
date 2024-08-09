const http = require('http');

http.createServer( (req, res) => {
    
    //res.writeHead(200, { 'Content-Type': 'text/plain' });

    //EJEMPLO DE JSON

    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona ={
    //     id: 1,
    //     nombre: 'Esbetlana'
    // }

    //EJEMPLO CSV
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Esvetlana\n');
    res.write('2, New\n');
    res.write('3, Goku\n');

    res.end();
})

.listen(8080);

console.log('Escuchando en ', 8080)