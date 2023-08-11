const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING // Titulo do tipo STRING (MySql)
    },
    conteudo: {
        type: db.Sequelize.TEXT // Conteudo do tipo TEXT (MySql)
    }
})

module.exports = Post;
