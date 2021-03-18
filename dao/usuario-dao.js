const mysql = require('mysql');

class UsuarioDao {

    constructor() {
        this._connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'water'
        });
    }
    save(usuario) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'insert into usuarios (nome, email, senha) values (?,?,?)', [usuario.nome, usuario.email, usuario.senha],
                function (err, results) {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    }
}

module.exports = UsuarioDao;