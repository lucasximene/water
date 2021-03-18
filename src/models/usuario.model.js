'use strict';
var db = require('./../../dao/usuario-dao');

var usuario = function(usuario){
  this.name           = usuario.name;
  this.email          = usuario.email;
  this.senha          = usuario.senha;
};
usuario.create = function (newUsu, result) {
db.query("INSERT INTO usuarios set ?", newUsu, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
usuario.findById = function (id, result) {
db.query("Select * from usuarios where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
usuario.findAll = function (result) {
db.query("Select * from usuarios", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('usuarios: ', res);
  result(null, res);
}
});
};
usuario.update = function(id, usuario, result){
db.query("UPDATE usuarios SET name=?, email=?, senha=?, WHERE id = ?", [usuario.name, usuario.email, usuario.senha, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
usuario.delete = function(id, result){
db.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= usuario;