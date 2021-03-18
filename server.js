

// CRIANDO UMA APP EXPRESS
const express = require("express");
const app = express();

//CONFIGURANDO MARKO
require('marko/node-require');
const markoExpress = require("marko/express");
app.use(markoExpress());

//CONFIGURANDO BODY-PARSER
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

//Porta
const port = process.env.PORT || 3000;

// define a root route
app.get('/', (req, res) => {
    res.marko(require('./templates/principal.marko'));
});

app.get('/2', (req, res) => {
    res.marko(require('./templates/beneficios.marko'));
});

app.get('/3', (req, res) => {
    res.marko(require('./templates/login.marko'));
});

app.get('/4', (req, res) => {
    res.marko(require('./templates/cronometro.marko'));
});

app.get('/5', (req, res) => {
    res.marko(require('./templates/pop-up.marko'));
});

app.get('/6', (req, res) => {
    res.marko(require('./templates/pontuacao.marko'));
});

app.get('/7', (req, res) => {
    res.marko(require('./templates/bebaagua.marko'));
});

// Require usuario routes
const usuarioRoutes = require('./src/routes/usuario.routes')

// using as middleware
app.use('/api/v1/employees', usuarioRoutes)

// listen for requests
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on port ${port}`);
});