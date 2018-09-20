const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const dbClient = mysql.createConnection({
    user: 'root',
    password: '960828',
    database: 'Company'
});

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (request, response) => {
    fs.readFile('list.html', 'utf8', (error, data) => {
        dbClient.query('SELECT * FROM products', (error, results) => {
            response.send(ejs.render(data, {
                data: results
            }))
        })
    })
});
app.get('/delete/:id', (request, response) => {
    dbClient.query('DELETE FROM products WHERE id=?', 
                    [request.params.id], 
                    () => {
        response.redirect('/');
    })
});
app.get('/insert', (request, response) => {
    fs.readFile('insert.html', 'utf8', (error,data) => {
        response.send(data);
    });
});
app.post('/insert', (request, response) => {
    const body = request.body;
    dbClient.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)',
                    [body.name, body.modelnumber, body.series], 
                    () => {
                        response.redirect('/');
                    });
});
app.get('/edit/:id', (request, response) => {
    fs.readFile('edit.html', 'utf8', (error, data) => {
        dbClient.query('SELECT * FROM products WHERE id=?',
                        [request.params.id],
                        (error, result) => {
                            response.send(ejs.render(data, {
                                data: result[0]
                            }));
                        });
    });
});
app.post('/edit/:id', (request, response) => {
    const body = request.body;

    dbClient.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?',
                    [body.name, body.modelnumber, body.series, request.params.id],
                    () => {
                        response.redirect('/');
                    });
});

app.listen(52273, () => {
    console.log('server is running...')
})