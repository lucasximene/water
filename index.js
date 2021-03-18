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

//CRIANDO DAO
const UsuarioDao = require('./dao/usuario-dao');
const dao = new UsuarioDao();

app.post('/usuarios', function (req, res) {
        dao.save(req.body).then( (result) =>{
            req.flash('success', 'Usuário salvo com sucesso.')
            res.redirect('/3')
        }).catch((err) => {
            console.log(err);
            req.flash('error', 'Ocorreu um erro ao salvar os dados do Usuário.')
            res.redirect('/3')
        });
    

});
